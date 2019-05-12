import * as types from '../actionTypes';

export default function addItemSuccess(item, image) {
  return {
    type: types.ITEM_ADD_SUCCESS,
    item: { ...item, image: image },
  };
}