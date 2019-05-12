import { get } from '../../../../../fetcher/fetcher';
import getOnTradeListSuccess from './getOnTradeListSuccess';
import getOnTradeListError from './getOnTradeListError';

export default function getOnTrade({ userID = '', category = '', order = '', page = '' }) {
  return (dispatch) => {
    return get(`/api/market/search?userID=${userID || ''}` +
      `&order=${order || ''}&category=${category || ''}&page=${page || ''}`)
      .then(response => {
        dispatch(getOnTradeListSuccess(response.items));
      })
      .catch(err => {
        dispatch(getOnTradeListError(err));
      });
  };
}
