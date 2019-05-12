import * as types from '../actionTypes';

export default function setSelected(item) {
  return {
    type: types.OFFER_CREATE_SET_SELECTED,
    item,
  };
}
