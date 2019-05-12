import * as types from '../../actionTypes';

export default function getOnTradeListError(err) {
  return {
    type: types.ITEM_ON_TRADE_LIST_ERROR,
    error: err,
  };
}