import * as types from '../../actionTypes';

export default function getOfferInfoError(err) {
  return {
    type: types.GET_OFFER_INFO_ERROR,
    error: err,
  };
}