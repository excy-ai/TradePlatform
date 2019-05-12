import * as types from '../actionTypes';

export default function authSuccess() {
  return {
    type: types.AUTH_SUCCESS,
    authenticated: true,
    error: null,
  };
}