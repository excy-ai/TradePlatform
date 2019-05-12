import * as types from '../../actionTypes';

export default function getSendedError(err) {
  return {
    type: types.GET_SENDED_ERROR,
    error: err,
  };
}