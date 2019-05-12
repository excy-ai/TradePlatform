import { post } from '../../../../fetcher/fetcher';
import authPending from './authPending';
import authSuccess from './authSuccess';
import authError from './authError';

export default function authenticate(body) {
  return dispatch => {
    dispatch(authPending());
    return post(`/api/auth/signin/`, body)
      .then(response => {
        dispatch(authSuccess());
      })
      .catch(err => {
        dispatch(authError(err));
      });
  };
}
