import * as types from '../actionTypes';

export default function setTarget(item) {
  return (dispatch) => {
    dispatch({
      type: types.OFFER_CREATE_SET_TARGET,
      item,
    });
  };
}
