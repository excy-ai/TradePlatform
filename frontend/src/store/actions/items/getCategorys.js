import { get } from '../../../fetcher/fetcher';
import * as types from './actionTypes';

export default function getCategorys() {
  return (dispatch) => {
    return get(`/api/user/items/categorys`)
      .then(response => {
        dispatch({
          type: types.GET_CATEGORY_LIST_SUCCESS,
          categoryList: response,
        });
      })
      .catch(err => {
        dispatch({
          type: types.GET_CATEGORY_LIST_ERROR,
          error: err,
        });
      });
  };
}
