import { post } from '../../fetcher/fetcher';
import * as types from './actionTypes';

export default function authenticate(body) {
  return dispatch => {
    dispatch({
      type: types.AUTH_PENDING,
      authenticated: false,
      error: null,
    });
    return post(`api/auth/signin/`, body)
      .then(response => {
        dispatch({
          type: types.AUTH_SUCCESS,
          authenticated: true,
          error: null,
        });
      })
      .catch(err => {
        dispatch({
          type: types.AUTH_ERROR,
          error: err,
        });
      });
  };
}
