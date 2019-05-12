import * as types from '../actionTypes';

export default function rejectOfferError(err) {
  return {
    type: types.OFFER_REJECT_ERROR,
    error: err,
  };
}