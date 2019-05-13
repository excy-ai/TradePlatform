import { get } from '../../../../../fetcher/fetcher';
import getSendedSuccess from './getSendedSuccess';
import setOfferError from '../../error/setOfferError';
import clearOfferError from '../../error/clearOfferError';

export default function getSended() {
  return (dispatch) => {
    return get(`/api/offers/sended`)
      .then(response => {
        dispatch(getSendedSuccess(response));
        dispatch(clearOfferError());
      })
      .catch(err => {
        dispatch(setOfferError(err));
      });
  };
}
