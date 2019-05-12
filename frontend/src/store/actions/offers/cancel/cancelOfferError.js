import * as types from '../actionTypes';

export default function cancelOfferError(err) {
  return {
    type: types.OFFER_CANCEL_ERROR,
    error: err,
  };
}