import { post } from '../../../../fetcher/fetcher';
import registerSuccess from './registerSuccess';
import registerError from './registerError';

export default function register(body) {
  return dispatch => {
    return post(`/api/auth/signup/`, body)
      .then(response => {
        dispatch(registerSuccess());
        return response;
      })
      .catch(err => {
        dispatch(registerError());
      });
  };
}
