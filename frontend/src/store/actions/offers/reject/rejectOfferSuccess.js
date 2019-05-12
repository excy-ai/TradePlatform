import * as types from '../actionTypes';

export default function rejectOfferSuccess(id) {
  return {
    type: types.OFFER_REJECT_SUCCESS,
    id: id,
  };
}