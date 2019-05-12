import { patch } from '../../../../fetcher/fetcher';
import rejectOfferSuccess from './rejectOfferSuccess';
import rejectOfferError from './rejectOfferError';

export default function rejectOffer(id) {
  return (dispatch) => {
    return patch(`/api/offers/${id}/reject`)
      .then(response => {
        return response.json();
      }).then(response => {
        dispatch(rejectOfferSuccess(id));
      })
      .catch(err => {
        dispatch(rejectOfferError(err));
      });
  };
}
