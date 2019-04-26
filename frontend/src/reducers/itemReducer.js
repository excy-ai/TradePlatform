import * as types from '../actions/items/actionTypes';

const initialState = {
  categoryList: [],
  items: [],
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USER_ITEMS_SUCCESS: {
      return {
        ...state,
        items: action.items,
        error: null,
      };
    }
    case types.GET_USER_ITEMS_ERROR: {
      return {
        ...state,
        items: [],
        error: action.error,
      };
    }
    case types.GET_CATEGORY_LIST_SUCCESS: {
      return {
        ...state,
        categoryList: action.categoryList,
        error: null,
      };
    }
    case types.GET_CATEGORY_LIST_ERROR: {
      return {
        ...state,
        categoryList: [],
        error: action.error,
      };
    }
    case types.ITEM_ADD_SUCCESS: {
      return {
        ...state,
        items: [action.item, ...state.items],
        error: null,
      };
    }
    case types.ITEM_ADD_ERROR: {
      return {
        ...state,
        error: action.error,
      };
    }
    case types.ITEM_STATUS_SWITCH_SUCCESS: {
      let newItems = state.items;
      newItems = newItems.map(item => {
        if (item.Id === action.id) {
          item.onTrade = !item.onTrade;
        }
        return item;
      });
      return {
        ...state,
        items: newItems,
        error: null,
      };
    }
    case types.ITEM_STATUS_SWITCH_ERROR: {
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
