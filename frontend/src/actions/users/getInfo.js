import { get } from '../../fetcher/fetcher';
import * as types from './actionTypes';

export default function getInfo(id) {
  return dispatch => {
    return get(`/api/user/info?id=${id}`)
      .then(response => {
        dispatch({
          type: types.GET_INFO_SUCCESS,
          items: response.items,
        });
      })
      .catch(err => {
        dispatch({
          type: types.GET_INFO_ERROR,
          error: err,
        });
      });
  };
}
