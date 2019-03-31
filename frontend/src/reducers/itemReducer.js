import * as types from "../actions/items/actionTypes";

const initialState = {
    categoryList: [],
    error: null
};

export default (state = initialState, action) => {
    debugger;
    switch (action.type) {
        case types.GET_CATEGORY_LIST_SUCCESS: {
            return {
                ...state,
                categoryList: action.categoryList,
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
        default: {
            return state;
        }
    }
}