import { patch } from '../../fetcher/fetcher';
import * as types from './actionTypes';

export default function cancelOffer(id) {
  return (dispatch) => {
    return patch(`/api/offers/${id}/accept`)
      .then(response => {
        return response.json();
      }).then(response => {
        dispatch({
          type: types.OFFER_ACCEPT_SUCCESS,
          id: id,
        });
      })
      .catch(err => {
        dispatch({
          type: types.OFFER_ACCEPT_ERROR,
          error: err,
        });
      });
  };
}
