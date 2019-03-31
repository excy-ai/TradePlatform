import * as types from "../actions/auth/actionTypes";

const initialState = {
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.REGISTER_SUCCESS: {
            return {
                ...state,
                error: null
            }
        }
        case types.REGISTER_ERROR: {
            return {
                ...state,
                error: action.error
            }
        }
        case types.AUTH_SUCCESS: {
            return {
                ...state,
                error: null
            }
        }
        case types.AUTH_ERROR: {
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