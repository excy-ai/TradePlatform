import * as types from '../actionTypes';
import clearOfferError from '../error/clearOfferError';

export default function setSelected(item) {
  return [
    {
      type: types.OFFER_CREATE_SET_SELECTED,
      item,
    },
    clearOfferError(),
  ];
}
