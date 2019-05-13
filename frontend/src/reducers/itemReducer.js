import * as types from '../store/actions/items/actionTypes';

const initialState = {
  categoryList: [],
  items: [],
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ITEM_ADD_SUCCESS: {
      return {
        ...state,
        items: [action.item, ...state.items],
      };
    }
    case types.GET_USER_ITEMS_SUCCESS: {
      return {
        ...state,
        items: action.items,
      };
    }
    case types.GET_CATEGORY_LIST_SUCCESS: {
      return {
        ...state,
        categoryList: action.categoryList,
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
      };
    }
    case types.ITEM_CLEAR_ERROR: {
      return {
        ...state,
        error: null,
      };
    }
    case types.ITEM_ERROR : {
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
