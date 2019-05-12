import * as types from './actionTypes';

export default function getInfoSuccess(items) {
  return {
    type: types.GET_INFO_SUCCESS,
    items: items,
  };
}