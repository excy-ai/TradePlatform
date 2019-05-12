import * as types from '../actionTypes';

export default function acceptOfferError(err) {
  return {
    type: types.OFFER_ACCEPT_ERROR,
    error: err,
  };
}