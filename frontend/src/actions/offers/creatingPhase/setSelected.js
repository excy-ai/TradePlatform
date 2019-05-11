import * as types from '../actionTypes';

// You do not need an async actionCreator if you do not do any async actions.
// --mrurenko 2019-05-10
export default function setSelected(item) {
  return (dispatch) => {
    dispatch({
      type: types.OFFER_CREATE_SET_SELECTED,
      item,
    });
  };
}
