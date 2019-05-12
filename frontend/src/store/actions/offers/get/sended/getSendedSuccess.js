import * as types from '../../actionTypes';

export default function getSendedSuccess(sended) {
  return {
    type: types.GET_SENDED_SUCCESS,
    sended: sended,
  };
}