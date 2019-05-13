import * as types from '../actionTypes';

export default function setItemError(err) {
  return {
    type: types.ITEM_ERROR,
    error: err,
  };
}
