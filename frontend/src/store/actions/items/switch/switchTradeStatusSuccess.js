import * as types from '../actionTypes';

export default function switchTradeStatusSuccess(id) {
  return {
    type: types.ITEM_STATUS_SWITCH_SUCCESS,
    id: id,
  };
}