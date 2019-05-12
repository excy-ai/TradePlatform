import { patch } from '../../../../fetcher/fetcher';
import acceptOfferSuccess from './acceptOfferSuccess';
import acceptOfferError from './acceptOfferError';

export default function acceptOffer(id) {
  return (dispatch) => {
    return patch(`/api/offers/${id}/accept`)
      .then(response => {
        return response.json();
      }).then(response => {
        dispatch(acceptOfferSuccess(id));
      })
      .catch(err => {
        dispatch(acceptOfferError(err));
      });
  };
}
