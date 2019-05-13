import { patch } from '../../../../fetcher/fetcher';
import acceptOfferSuccess from './acceptOfferSuccess';
import setOfferError from '../error/setOfferError';
import clearOfferError from '../error/clearOfferError';

export default function acceptOffer(id) {
  return (dispatch) => {
    return patch(`/api/offers/${id}/accept`)
      .then(response => {
        return response.json();
      }).then(response => {
        dispatch(acceptOfferSuccess(id));
        dispatch(clearOfferError());
      })
      .catch(err => {
        dispatch(setOfferError(err));
      });
  };
}
