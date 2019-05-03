import * as types from './actionTypes';
import { get } from '../../fetcher/fetcher';

export default function getOfferItems(id) {
  return (dispatch) => {
    return get(`/api/offers/${id}/info`)
      .then(response => {
        dispatch({
          type: types.GET_OFFER_INFO_SUCCESS,
          id: id,
          offer: response,
        });
      })
      .catch(err => {
        dispatch({
          type: types.GET_OFFER_INFO_ERROR,
          error: err,
        });
        throw err;
      });
  };
}
