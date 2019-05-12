import * as types from './actionTypes';

export default function getInfoError(err) {
  return {
    type: types.GET_INFO_ERROR,
    error: err,
  };
}