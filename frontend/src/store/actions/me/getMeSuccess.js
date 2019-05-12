import * as types from './actionTypes';

export default function getMeSuccess(id) {
  return {
    type: types.GET_USER_DATA_SUCCESS,
    id: id,
  };
}