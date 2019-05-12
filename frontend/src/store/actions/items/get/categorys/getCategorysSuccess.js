import * as types from '../../actionTypes';

export default function getCategorysSuccess(categorys) {
  return {
    type: types.GET_CATEGORY_LIST_SUCCESS,
    categoryList: categorys,
  };
}