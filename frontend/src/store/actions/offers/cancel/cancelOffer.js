import { del } from '../../../../fetcher/fetcher';
import cancelOfferSuccess from './cancelOfferSuccess';
import setOfferError from '../error/setOfferError';
import clearOfferError from '../error/clearOfferError';

export default function cancelOffer(id) {
  return (dispatch) => {
    return del(`/api/offers/${id}/cancel`)
      .then(response => {
        return response.json();
      }).then(response => {
        dispatch(cancelOfferSuccess(id));
        dispatch(clearOfferError());
      })
      .catch(err => {
        dispatch(setOfferError(err));
      });
  };
}
