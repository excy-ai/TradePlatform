import * as types from '../actionTypes';

export default function createOfferError(err) {
  return {
    type: types.OFFER_CREATE_ERROR,
    error: err,
  };
}