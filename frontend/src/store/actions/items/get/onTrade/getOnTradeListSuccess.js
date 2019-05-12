import * as types from '../../actionTypes';

export default function getOnTradeListSuccess(items) {
  return {
    type: types.ITEM_ON_TRADE_LIST_SUCCESS,
    itemsOnTrade: items,
  };
}