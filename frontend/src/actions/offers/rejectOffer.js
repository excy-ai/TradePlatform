import { patch } from '../../fetcher/fetcher';
import * as types from './actionTypes';

export default function rejectOffer(id) {
  return (dispatch) => {
    return patch(`/api/offers/${id}/reject`)
      .then(response => {
        return response.json();
      }).then(response => {
        dispatch({
          type: types.OFFER_REJECT_SUCCESS,
          id: id,
        });
      })
      .catch(err => {
        dispatch({
          type: types.OFFER_REJECT_ERROR,
          error: err,
        });
      });
  };
}
