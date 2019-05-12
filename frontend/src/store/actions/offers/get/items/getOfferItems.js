import { get } from '../../../../../fetcher/fetcher';
import getOfferInfoSuccess from './getOfferInfoSuccess';
import getOfferInfoError from './getOfferInfoError';

export default function getOfferItems(id) {
  return (dispatch) => {
    return get(`/api/offers/${id}/info`)
      .then(response => {
        dispatch(getOfferInfoSuccess(response, id));
      })
      .catch(err => {
        dispatch(getOfferInfoError(err));
        throw err;
      });
  };
}
