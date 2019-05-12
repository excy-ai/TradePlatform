import * as types from '../actionTypes';

export default function createOfferSuccess(offer) {
  return {
    type: types.OFFER_CREATE_SUCCESS,
    offer: offer,
  };
}