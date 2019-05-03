import * as types from '../actionTypes';

export default function startCreatingOffer() {
  return (dispatch) => {
    dispatch({
      type: types.OFFER_CREATE_PENDING,
    });
  };
}
