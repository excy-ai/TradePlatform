import * as types from '../actionTypes';

export default function acceptOfferSuccess(id) {
  return {
    type: types.OFFER_ACCEPT_SUCCESS,
    id: id,
  };
}