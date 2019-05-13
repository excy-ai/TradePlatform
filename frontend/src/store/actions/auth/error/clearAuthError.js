import * as types from '../actionTypes';

export default function clearAuthError() {
  return {
    type: types.CLEAR_AUTH_ERROR,
  };
}