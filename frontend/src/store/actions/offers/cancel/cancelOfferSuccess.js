import * as types from '../actionTypes';

export default function cancelOfferSuccess(id) {
  return {
    type: types.OFFER_CANCEL_SUCCESS,
    id: id,
  };
}