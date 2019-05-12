import { get } from '../../../fetcher/fetcher';
import * as types from './actionTypes';

export default function getTargeted() {
  return (dispatch) => {
    return get(`/api/offers/targeted`)
      .then(response => {
        dispatch({
          type: types.GET_TARGETED_SUCCESS,
          targeted: response,
        });
      })
      .catch(err => {
        dispatch({
          type: types.GET_TARGETED_ERROR,
          error: err,
        });
      });
  };
}
