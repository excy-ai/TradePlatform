import * as types from '../actionTypes';

export default function setOfferError(err) {
  return {
    type: types.OFFER_ERROR,
    error: err,
  };
}
