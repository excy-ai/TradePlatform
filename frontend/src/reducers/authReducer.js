import * as types from '../store/actions/auth/actionTypes';

const initialState = {
  authenticated: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER_SUCCESS: {
      return {
        ...state,
        error: null,
      };
    }
    case types.AUTH_PENDING: {
      return {
        ...state,
        authenticated: false,
        error: null,
      };
    }
    case types.AUTH_SUCCESS: {
      return {
        ...state,
        authenticated: true,
        error: null,
      };
    }
    case types.SET_AUTH_ERROR: {
      return {
        ...state,
        error: action.error,
      };
    }
    case types.CLEAR_AUTH_ERROR: {
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
