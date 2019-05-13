import * as types from '../store/actions/items/actionTypes';
import { MARKET_ERROR, CLEAR_MARKET_ERROR } from '../store/actions/market/actionTypes';

const initialState = {
  itemsOnTrade: [],
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ITEM_ON_TRADE_LIST_SUCCESS: {
      return {
        ...state,
        itemsOnTrade: action.itemsOnTrade,
        error: null,
      };
    }
    case MARKET_ERROR: {
      return {
        ...state,
        error: action.error,
      };
    }
    case CLEAR_MARKET_ERROR: {
      return {
        ...state,
        error: null,
      };
    }
    default: {
      return state;
    }
  }
};
