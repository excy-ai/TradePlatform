import { post } from '../../../fetcher/fetcher';
import * as types from './actionTypes';

export default function createOffer(body) {
  return (dispatch) => {
    return post(`/api/offers/create`, body)
      .then(response => {
        return response.json();
      }).then(response => {
        dispatch({
          type: types.OFFER_CREATE_SUCCESS,
          offer: response,
        });
      })
      .catch(err => {
        dispatch({
          type: types.OFFER_CREATE_ERROR,
          error: err,
        });
      });
  };
}
