import * as types from '../actionTypes';

export default function setAuthError(err) {
  return {
    type: types.SET_AUTH_ERROR,
    error: err,
  };
}
