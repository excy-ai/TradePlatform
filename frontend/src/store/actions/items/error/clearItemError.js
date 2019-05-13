import * as types from '../actionTypes';

export default function clearItemError() {
  return {
    type: types.ITEM_CLEAR_ERROR,
  };
}