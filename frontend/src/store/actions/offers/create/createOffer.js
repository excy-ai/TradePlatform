import { post } from '../../../../fetcher/fetcher';
import createOfferSuccess from './createOfferSuccess';
import createOfferError from './createOfferError';

export default function createOffer(body) {
  return (dispatch) => {
    return post(`/api/offers/create`, body)
      .then(response => {
        return response.json();
      }).then(response => {
        dispatch(createOfferSuccess(response));
      })
      .catch(err => {
        dispatch(createOfferError(err));
      });
  };
}
