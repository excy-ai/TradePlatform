import * as types from "../actions/me/actionTypes";

const initialState = {
    userId: '',
    items: [],
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.GET_USER_SUCCESS: {
            return {
                ...state,
                items: action.userData.items,
                userId: action.userData.user.id,
                error: null
            }
        }
        case types.GET_USER_ERROR: {
            return {
                ...state,
                userId: '',
                items: [],
                error: action.error
            }
        }
        case types.STATUS_SWITCH_SUCCESS: {
            let newItems = state.items;
            newItems = newItems.map((item) => {
                    if (item.id === action.id) {
                        item.onTrade = !item.onTrade;
                    }
                    return item;
                }
            );
            return {
                ...state,
                items: newItems,
                error: null
            }
        }
        case types.STATUS_SWITCH_ERROR: {
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