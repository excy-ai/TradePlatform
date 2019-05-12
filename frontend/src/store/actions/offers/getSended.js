import { get } from '../../../fetcher/fetcher';
import * as types from './actionTypes';

export default function getSended() {
  return (dispatch) => {
    return get(`/api/offers/sended`)
      .then(response => {
        dispatch({
          type: types.GET_SENDED_SUCCESS,
          sended: response,
        });
      })
      .catch(err => {
        dispatch({
          type: types.GET_SENDED_ERROR,
          error: err,
        });
      });
  };
}
