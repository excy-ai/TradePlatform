import { post } from '../../../../fetcher/fetcher';
import authPending from './authPending';
import authSuccess from './authSuccess';
import clearAuthError from '../error/clearAuthError';
import setAuthError from '../error/setAuthError';

export default function authenticate(body) {
  return dispatch => {
    dispatch(authPending());
    return post(`/api/auth/signin/`, body)
      .then(response => {
        dispatch(authSuccess());
        dispatch(clearAuthError());
      })
      .catch(err => {
        dispatch(setAuthError(err));
      });
  };
}
