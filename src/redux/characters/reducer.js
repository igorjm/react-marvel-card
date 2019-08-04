import {
  CHARACTERS_REQUEST,
  CHARACTERS_SUCCESS,
  SEARCH_CHARACTERS_REQUEST,
  SEARCH_CHARACTERS_SUCCESS,
  CHARACTERS_STOP_LOADING,
} from './types';

const INITIAL_STATE = {
  items: [],
  isLoading: false,
  nameStartsWith: '',
  total: 0,
};

const characters = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHARACTERS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case CHARACTERS_SUCCESS:
      return {
        ...state,
        items: state.items.concat(action.data.results),
        isLoading: false,
        total: action.data.total,
      };
    case SEARCH_CHARACTERS_REQUEST:
      return {
        ...state,
        items: [],
        isLoading: true,
      };
    case SEARCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        items: action.data.results,
        isLoading: false,
        nameStartsWith: action.nameStartsWith,
        total: action.data.total,
      };
    case CHARACTERS_STOP_LOADING:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default characters;
