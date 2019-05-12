import * as types from '../../actionTypes';

export default function getUserItemsError(err) {
  return {
    type: types.GET_USER_ITEMS_ERROR,
    error: err,
  };
}