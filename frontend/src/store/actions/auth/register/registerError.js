import * as types from '../actionTypes';

export default function registerError(err) {
  return {
    type: types.REGISTER_ERROR,
    error: err,
  };
}