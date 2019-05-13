import { patch } from '../../../../fetcher/fetcher';
import rejectOfferSuccess from './rejectOfferSuccess';
import setOfferError from '../error/setOfferError';
import clearOfferError from '../error/clearOfferError';

export default function rejectOffer(id) {
  return (dispatch) => {
    return patch(`/api/offers/${id}/reject`)
      .then(response => {
        return response.json();
      }).then(response => {
        dispatch(rejectOfferSuccess(id));
        dispatch(clearOfferError());
      })
      .catch(err => {
        dispatch(setOfferError(err));
      });
  };
}
