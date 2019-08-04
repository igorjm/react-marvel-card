import { call, put, takeEvery, select } from 'redux-saga/effects';
import {
  CHARACTERS_REQUEST,
  CHARACTERS_SUCCESS,
  SEARCH_CHARACTERS_REQUEST,
  SEARCH_CHARACTERS_SUCCESS,
  CHARACTERS_STOP_LOADING,
} from './types';
import { services } from '../../utils';

const LIMIT = 20;

/**
 * Return the response with only the necessary data
 * @param {Object} response
 */
const refineResponse = response => ({
  ...response,
  results: response.results.map(val => ({
    id: val.id,
    name: val.name,
    thumbnail: val.thumbnail,
  })),
});

// selectors
const getCharactersReducer = state => state.characters;

function* fetchCharacters(action) {
  try {
    const { items, nameStartsWith, total } = yield select(getCharactersReducer);

    if (total && items.length === total) {
      yield put({ type: CHARACTERS_STOP_LOADING });
      return;
    }

    const {
      data: { data: response },
    } = yield call(services.getCharacters, {
      limit: LIMIT,
      offset: items.length,
      ...(nameStartsWith && { nameStartsWith }),
    });

    const data = refineResponse(response);

    yield put({ type: CHARACTERS_SUCCESS, data });
  } catch (e) {
    // handle
  }
}

function* searchCharacters({ nameStartsWith }) {
  try {
    const {
      data: { data: response },
    } = yield call(services.getCharacters, {
      limit: LIMIT,
      ...(nameStartsWith && { nameStartsWith }),
    });

    const data = refineResponse(response);

    yield put({
      type: SEARCH_CHARACTERS_SUCCESS,
      data,
      nameStartsWith,
    });
  } catch (e) {
    // handle
  }
}

export default [
  takeEvery(CHARACTERS_REQUEST, fetchCharacters),
  takeEvery(SEARCH_CHARACTERS_REQUEST, searchCharacters),
];
