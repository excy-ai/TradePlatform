import * as types from '../store/actions/users/actionTypes';

const initialState = {
  items: [],
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_INFO_SUCCESS: {
      return {
        ...state,
        items: action.items,
        error: null,
      };
    }
    case types.GET_INFO_ERROR: {
      return {
        ...state,
        items: [],
        error: action.error,
      };
    }
    default: {
      return state;
    }
  }
};
