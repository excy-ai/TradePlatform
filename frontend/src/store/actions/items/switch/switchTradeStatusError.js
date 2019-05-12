import * as types from '../actionTypes';

export default function switchTradeStatusError(err) {
  return {
    type: types.ITEM_STATUS_SWITCH_ERROR,
    error: err,
  };
}