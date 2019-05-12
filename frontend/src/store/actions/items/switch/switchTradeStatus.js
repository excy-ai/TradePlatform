import { post } from '../../../../fetcher/fetcher';
import switchTradeStatusSuccess from './switchTradeStatusSuccess';
import switchTradeStatusError from './switchTradeStatusError';

export default function switchTradeStatus(id) {
  let body = { id };
  return dispatch => {
    return post(`/api/user/items/trade/switchStatus`, body)
      .then(response => {
        dispatch(switchTradeStatusSuccess(id));
        return response;
      })
      .catch(err => {
        dispatch(switchTradeStatusError(err));
      });
  };
}
