import * as types from '../actions/me/actionTypes';

const initialState = {
  userId: '',
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USER_DATA_SUCCESS: {
      return {
        ...state,
        userId: action.id,
        error: null,
      };
    }
    case types.GET_USER_DATA_ERROR: {
      return {
        ...state,
        userId: '',
        error: action.error,
      };
    }
    default: {
      return state;
    }
  }
};
