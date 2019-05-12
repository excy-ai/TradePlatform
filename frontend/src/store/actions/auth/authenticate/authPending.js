import * as types from '../actionTypes';

export default function authPending() {
  return {
    type: types.AUTH_PENDING,
    authenticated: false,
    error: null,
  };
}