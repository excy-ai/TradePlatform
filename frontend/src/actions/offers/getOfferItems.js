import { del } from '../../fetcher/fetcher';
import * as types from './actionTypes';

export default function getOfferItems(id) {
  return (dispatch) => {
    return del(`/api/offers/${id}/info`)
      .then(response => {
        return response.json();
      }).then(response => {
        dispatch({
          type: types.OFFER_ITEMS_GET_SUCCESS,
          target: response.target,
          offered: response.offered,
        });
      })
      .catch(err => {
        dispatch({
          type: types.OFFER_ITEMS_GET_ERROR,
          error: err,
        });
      });
  };
}
