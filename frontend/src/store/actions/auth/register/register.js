import { post } from '../../../../fetcher/fetcher';
import registerSuccess from './registerSuccess';
import setAuthError from '../error/setAuthError';
import clearAuthError from '../error/clearAuthError';

export default function register(body) {
  return dispatch => {
    return post(`/api/auth/signup/`, body)
      .then(response => {
        dispatch(registerSuccess());
        dispatch(clearAuthError());
        return response;
      })
      .catch(err => {
        dispatch(setAuthError(err));
      });
  };
}
