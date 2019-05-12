import * as types from '../../actionTypes';

export default function getUserItemsSuccess(items) {
  return {
    type: types.GET_USER_ITEMS_SUCCESS,
    items: items,
  };
}