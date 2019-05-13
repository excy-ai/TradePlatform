import * as types from '../actionTypes';
import clearOfferError from '../error/clearOfferError';

export default function setTarget(item) {
  return [
    {
      type: types.OFFER_CREATE_SET_TARGET,
      item,
    },
    clearOfferError(),
  ];
}
