import * as types from '../../actionTypes';

export default function getCategorysError(err) {
  return {
    type: types.GET_CATEGORY_LIST_ERROR,
    error: err,
  };
}