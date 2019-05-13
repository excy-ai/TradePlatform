import { get } from '../../../../../fetcher/fetcher';
import getOnTradeListSuccess from './getOnTradeListSuccess';
import clearMarketError from '../../../market/error/clearMarketError';
import setMarketError from '../../../market/error/setMarketError';

export default function getOnTrade({ userID = '', category = '', order = '', page = '' }) {
  return (dispatch) => {
    return get(`/api/market/search?userID=${userID || ''}` +
      `&order=${order || ''}&category=${category || ''}&page=${page || ''}`)
      .then(response => {
        dispatch(getOnTradeListSuccess(response.items));
        dispatch(clearMarketError());
      })
      .catch(err => {
        dispatch(setMarketError(err));
      });
  };
}
