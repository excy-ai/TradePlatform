import * as types from '../actions/offers/actionTypes';

const initialState = {
  sended: [],
  targeted: [],
  targetItem: {},
  selectedItem: {},
  offers: [],
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
    case types.OFFER_CREATE_SET_TARGET: {
      return {
        ...state,
        targetItem: action.item,
        error: null,
      };
    }
    case types.OFFER_CREATE_SET_SELECTED: {
      return {
        ...state,
        selectedItem: action.item,
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
    case types.GET_OFFER_INFO_SUCCESS: {
      return {
        ...state,
        offers: [{
          id: action.id,
          ...action.offer,
        }, ...state.offers],
      };
    }
    case types.GET_OFFER_INFO_ERROR: {
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
    case types.OFFER_ACCEPT_SUCCESS: {
      let offers = state.offers.filter(item => {
        if (item.id === action.id) {
          return {
            id: item.id,
            target: item.target,
            targetItem: item.targetItem,
            offeredItem: item.offeredItem,
            status: 'Completed',
            user_Id: item.user_Id,
            created_at: item.created_at,
            updated_at: item.updated_at,
          };
        } else {
          return item;
        }
      });
      return {
        ...state,
        offers: offers,
        error: null,
      };
    }
    case types.OFFER_ACCEPT_ERROR: {
      return {
        ...state,
        error: action.error,
      };
    }
    case types.OFFER_REJECT_SUCCESS: {
      let offers = state.offers.filter(item => {
        if (item.id === action.id) {//FIXME: TEST {...item, status:'Rejected'}
          return {
            id: item.id,
            target: item.target,
            targetItem: item.targetItem,
            offeredItem: item.offeredItem,
            status: 'Rejected',
            user_Id: item.user_Id,
            created_at: item.created_at,
            updated_at: item.updated_at,
          };
        } else {
          return item;
        }
      });
      return {
        ...state,
        offers: offers,
        error: null,
      };
    }
    case types.OFFER_REJECT_ERROR: {
      return {
        ...state,
        error: action.error,
      };
    }
    case types.OFFER_CANCEL_SUCCESS: {
      let offers = state.offers.filter(item => {
        if (item.id === action.id) {
          return {
            id: item.id,
            target: item.target,
            targetItem: item.targetItem,
            offeredItem: item.offeredItem,
            status: 'Canceled',
            user_Id: item.user_Id,
            created_at: item.created_at,
            updated_at: item.updated_at,
          };
        } else {
          return item;
        }
      });
      return {
        ...state,
        offers: offers,
        error: null,
      };
    }
    case types.OFFER_CANCEL_ERROR: {
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
