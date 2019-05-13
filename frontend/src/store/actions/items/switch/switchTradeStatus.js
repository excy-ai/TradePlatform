import { post } from '../../../../fetcher/fetcher';
import switchTradeStatusSuccess from './switchTradeStatusSuccess';
import clearItemError from '../error/clearItemError';
import setItemError from '../error/setItemError';

export default function switchTradeStatus(id) {
  let body = { id };
  return dispatch => {
    return post(`/api/user/items/trade/switchStatus`, body)
      .then(response => {
        dispatch(switchTradeStatusSuccess(id));
        dispatch(clearItemError());
        return response;
      })
      .catch(err => {
        dispatch(setItemError(err));
      });
  };
}
