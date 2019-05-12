import * as types from './actionTypes';

export default function cancelCreatingOffer() {
  return (dispatch) => {
    dispatch({
      type: types.OFFER_CREATE_CANCELED,
    });
  };
}
