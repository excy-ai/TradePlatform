import { get } from '../../../fetcher/fetcher';
import * as types from './actionTypes';

export default function getItems() {
  return dispatch => {
    return get(`/api/user/me`)
      .then(response => {
        dispatch({
          type: types.GET_USER_ITEMS_SUCCESS,
          items: response.items,
        });
      })
      .catch(err => {
        dispatch({
          type: types.GET_USER_ITEMS_ERROR,
          error: err,
        });
      });
  };
}
