import * as types from "../actions/items/actionTypes";

const initialState = {
    categoryList: [],
    itemsOnTrade: [],
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.GET_CATEGORY_LIST_SUCCESS: {
            return {
                ...state,
                categoryList: action.categoryList,
                itemsOnTrade: state.itemsOnTrade,
                error: null
            }
        }
        case types.GET_CATEGORY_LIST_ERROR: {
            return {
                ...state,
                categoryList: [],
                error: action.error
            }
        }
        case types.ITEM_ADD_SUCCESS: {
            return {
                ...state,
                error: null
            }
        }
        case types.ITEM_ADD_ERROR: {
            return {
                ...state,
                error: action.error
            }
        }
        case types.ITEM_ON_TRADE_LIST_SUCCESS: {
            return {
                ...state,
                categoryList: state.categoryList,
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