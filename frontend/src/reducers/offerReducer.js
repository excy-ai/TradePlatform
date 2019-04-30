import * as types from '../actions/offers/actionTypes';

const initialState = {
  sended: [],
  targeted: [],
  targetItem: '',
  selectedItem: '',
  creating: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.OFFER_CREATE_PENDING: {
      return {
        ...state,
        creating: true,
        error: null,
      };
    }
    case types.OFFER_CREATE_CANCELED: {
      return {
        ...state,
        creating: false,
        error: null,
      };
    }
    case types.OFFER_CREATE_SUCCESS: {
      return {
        ...state,
        sended: [action.offer, ...state.sended],
        creating: false,
        error: null,
      };
    }
    case types.OFFER_CREATE_ERROR: {
      return {
        ...state,
        error: action.error,
      };
    }
    case types.GET_SENDED_SUCCESS: {
      return {
        ...state,
        sended: action.sended,
        error: null,
      };
    }
    case types.GET_SENDED_ERROR: {
      return {
        ...state,
        error: action.error,
      };
    }
    case types.GET_TARGETED_SUCCESS: {
      return {
        ...state,
        targeted: action.targeted,
        error: null,
      };
    }
    case types.GET_TARGETED_ERROR: {
      return {
        ...state,
        error: action.error,
      };
    }
    default: {
      return state;
    }
  }
};
