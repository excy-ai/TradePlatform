import { del } from '../../../fetcher/fetcher';
import * as types from './actionTypes';

export default function cancelOffer(id) {
  return (dispatch) => {
    return del(`/api/offers/${id}/cancel`)
      .then(response => {
        return response.json();
      }).then(response => {
        dispatch({
          type: types.OFFER_CANCEL_SUCCESS,
          id: id,
        });
      })
      .catch(err => {
        dispatch({
          type: types.OFFER_CANCEL_ERROR,
          error: err,
        });
      });
  };
}
