import * as types from "../actions/user/actionTypes";

const initialState = {
    userData: undefined,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.GET_USER_SUCCESS: {
            return {
                ...state,
                userData: action.userData,
                error: null
            }
        }
        case types.GET_USER_ERROR: {
            return {
                ...state,
                userData: {},
                error: action.error
            }
        }
        default: {
            return state;
        }
    }
}