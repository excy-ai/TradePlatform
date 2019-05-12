import * as types from '../actionTypes';

export default function authError(err) {
  return {
    type: types.AUTH_ERROR,
    error: err,
  };
}