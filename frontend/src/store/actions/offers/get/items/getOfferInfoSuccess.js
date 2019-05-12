import * as types from '../../actionTypes';

export default function getOfferInfoSuccess(offer, id) {
  return {
    type: types.GET_OFFER_INFO_SUCCESS,
    id: id,
    offer: offer,
  };
}