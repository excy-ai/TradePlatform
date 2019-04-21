import { get } from '../../fetcher/fetcher';
import * as types from './actionTypes';
import {AUTH_SUCCESS} from '../auth/actionTypes'

export default function getMe() {
  return dispatch => {
    return get(`api/user/me`)
      .then(response => {
        dispatch({
          type: types.GET_USER_SUCCESS,
          userData: response,
        });
        dispatch({
          type: AUTH_SUCCESS,
          authenticated: true,
          error: null,
        });
      })
      .catch(err => {
        dispatch({
          type: types.GET_USER_ERROR,
          error: err,
        });
      });
  };
}
