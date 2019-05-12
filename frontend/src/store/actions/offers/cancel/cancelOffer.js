import { del } from '../../../../fetcher/fetcher';
import cancelOfferSuccess from './cancelOfferSuccess';
import cancelOfferError from './cancelOfferError';
import * as types from '../actionTypes';

export default function cancelOffer(id) {
  return (dispatch) => {
    return del(`/api/offers/${id}/cancel`)
      .then(response => {
        return response.json();
      }).then(response => {
        dispatch();
      })
      .catch(err => {
        dispatch({
          type: types.OFFER_CANCEL_ERROR,
          error: err,
        });
      });
  };
}
