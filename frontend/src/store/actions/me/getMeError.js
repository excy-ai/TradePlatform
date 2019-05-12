import * as types from './actionTypes';

export default function getMeError(err) {
  return {
    type: types.GET_USER_DATA_ERROR,
    error: err,
  };
}