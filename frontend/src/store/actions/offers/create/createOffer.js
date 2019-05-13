import { post } from '../../../../fetcher/fetcher';
import createOfferSuccess from './createOfferSuccess';
import setOfferError from '../error/setOfferError';
import clearOfferError from '../error/clearOfferError';

export default function createOffer(body) {
  return (dispatch) => {
    return post(`/api/offers/create`, body)
      .then(response => {
        return response.json();
      }).then(response => {
        dispatch(createOfferSuccess(response));
        dispatch(clearOfferError());
      })
      .catch(err => {
        dispatch(setOfferError(err));
      });
  };
}
