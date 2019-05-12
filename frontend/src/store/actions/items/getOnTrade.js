import { get } from '../../../fetcher/fetcher';
import * as types from './actionTypes';

export default function getOnTrade({ userID = '', category = '', order = '', page = '' }) {
  return (dispatch) => {
    return get(`/api/market/search?userID=${userID || ''}` +
      `&order=${order || ''}&category=${category || ''}&page=${page || ''}`)
      .then(response => {
        dispatch({
          type: types.ITEM_ON_TRADE_LIST_SUCCESS,
          itemsOnTrade: response.items,
        });
      })
      .catch(err => {
        dispatch({
          type: types.ITEM_ON_TRADE_LIST_ERROR,
          error: err,
        });
      });
  };
}
