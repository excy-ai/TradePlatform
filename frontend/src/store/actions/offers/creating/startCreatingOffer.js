import * as types from '../actionTypes';
import clearOfferError from '../error/clearOfferError';

export default function startCreatingOffer() {
  return [
    {
      type: types.OFFER_CREATE_PENDING,
    },
    clearOfferError(),
  ];
}
