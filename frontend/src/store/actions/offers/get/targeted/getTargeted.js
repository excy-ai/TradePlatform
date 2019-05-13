import { get } from '../../../../../fetcher/fetcher';
import getTargetedSuccess from './getTargetedSuccess';
import setOfferError from '../../error/setOfferError';
import clearOfferError from '../../error/clearOfferError';

export default function getTargeted() {
  return (dispatch) => {
    return get(`/api/offers/targeted`)
      .then(response => {
        dispatch(getTargetedSuccess(response));
        dispatch(clearOfferError());
      })
      .catch(err => {
        dispatch(setOfferError(err));
      });
  };
}
