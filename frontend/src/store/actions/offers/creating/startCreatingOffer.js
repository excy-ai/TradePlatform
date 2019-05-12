import * as types from '../actionTypes';

export default function startCreatingOffer() {
  return {
    type: types.OFFER_CREATE_PENDING,
  };
}
