import * as types from "../actions/items/actionTypes";

const initialState = {
    itemsOnTrade: [],
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.ITEM_ON_TRADE_LIST_SUCCESS: {
            return {
                ...state,
                itemsOnTrade: action.itemsOnTrade,
                error: null
            }
        }
        case types.ITEM_ON_TRADE_LIST_ERROR: {
            return {
                ...state,
                error: action.error
            }
        }
        default: {
            return state;
        }
    }
}