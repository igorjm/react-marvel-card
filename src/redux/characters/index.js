import reducer from './reducer';
import saga from './saga';
import {
  CHARACTERS_REQUEST,
  CHARACTERS_SUCCESS,
  SEARCH_CHARACTERS_REQUEST,
  SEARCH_CHARACTERS_SUCCESS,
  CHARACTERS_STOP_LOADING,
} from './types';

export {
  reducer as characters,
  saga as charactersSaga,
  CHARACTERS_REQUEST,
  CHARACTERS_SUCCESS,
  SEARCH_CHARACTERS_REQUEST,
  SEARCH_CHARACTERS_SUCCESS,
  CHARACTERS_STOP_LOADING,
};
