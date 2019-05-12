import * as types from '../actionTypes';

export default function cancelCreatingOffer() {
  return {
    type: types.OFFER_CREATE_CANCELED,
  };
}
