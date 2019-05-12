import { post } from '../../../fetcher/fetcher';
import * as types from '../items/actionTypes';

export default function switchTradeStatus(id) {
  let body = { id };
  return dispatch => {
    return post(`/api/user/items/trade/switchStatus`, body)
      .then(response => {
        dispatch({
          type: types.ITEM_STATUS_SWITCH_SUCCESS,
          id: id,
        });
        return response;
      })
      .catch(err => {
        dispatch({
          type: types.ITEM_STATUS_SWITCH_ERROR,
          error: err,
        });
      });
  };
}
