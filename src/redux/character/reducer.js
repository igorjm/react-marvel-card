import {
  CHARACTER_REQUEST,
  CHARACTER_SUCCESS,
  CHARACTER_EDIT_SUCCESS,
} from './types';

const INITIAL_STATE = {
  data: null,
  series: [],
  isLoading: false,
};

const character = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHARACTER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case CHARACTER_SUCCESS:
      return {
        ...state,
        data: action.character,
        series: action.series,
        isLoading: false,
      };
    case CHARACTER_EDIT_SUCCESS:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.editedData,
        },
      };

    default:
      return state;
  }
};

export default character;
