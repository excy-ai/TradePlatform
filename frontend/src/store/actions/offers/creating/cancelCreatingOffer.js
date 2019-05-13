import * as types from '../actionTypes';
import clearOfferError from '../error/clearOfferError';

export default function cancelCreatingOffer() {
  return [
    {
      type: types.OFFER_CREATE_CANCELED,
    },
    clearOfferError(),
  ];
}
