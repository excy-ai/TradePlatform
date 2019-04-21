import { post } from '../../fetcher/fetcher';
import * as types from './actionTypes';

export default function register(body) {
  return dispatch => {
    return post(`api/auth/signup/`, body)
      .then(response => {
        dispatch({
          type: types.REGISTER_SUCCESS,
        });
        return response;
      })
      .catch(err => {
        dispatch({
          type: types.REGISTER_ERROR,
          error: err,
        });
      });
  };
}
