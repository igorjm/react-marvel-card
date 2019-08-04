import { call, put, takeEvery } from 'redux-saga/effects';
import { CHARACTER_REQUEST, CHARACTER_SUCCESS } from './types';
import { services } from '../../utils';

/**
 * Return the response with only the necessary data
 * @param {Object} response
 */
const refineCharacterResponse = response =>
  response.results.map(val => ({
    id: val.id,
    name: val.name,
    description: val.description,
    thumbnail: val.thumbnail,
  }))[0];

function* fetchCharacter({ characterId }) {
  try {
    const {
      data: { data: characterResponse },
    } = yield call(services.getCharacter, characterId);

    const {
      data: { data: seriesResponse },
    } = yield call(services.getCharacterSeries, characterId);

    const character = refineCharacterResponse(characterResponse);

    const series = seriesResponse.results.map(val => ({
      id: val.id,
      title: val.title,
      description: val.description,
      thumbnail: val.thumbnail,
    }));

    yield put({ type: CHARACTER_SUCCESS, character, series });
  } catch (e) {
    // handle
  }
}

export default [takeEvery(CHARACTER_REQUEST, fetchCharacter)];
