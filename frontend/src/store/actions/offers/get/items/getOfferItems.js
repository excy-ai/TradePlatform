import { get } from '../../../../../fetcher/fetcher';
import getOfferInfoSuccess from './getOfferInfoSuccess';
import setOfferError from '../../error/setOfferError';
import clearOfferError from '../../error/clearOfferError';

export default function getOfferItems(id) {
  return (dispatch) => {
    return get(`/api/offers/${id}/info`)
      .then(response => {
        dispatch(getOfferInfoSuccess(response, id));
        dispatch(clearOfferError());
      })
      .catch(err => {
        dispatch(setOfferError(err));
        throw err;
      });
  };
}
