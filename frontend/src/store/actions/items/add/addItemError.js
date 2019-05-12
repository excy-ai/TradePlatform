import * as types from '../actionTypes';

export default function addItemError(err) {
  return {
    type: types.ITEM_ADD_ERROR,
    error: err,
  };
}