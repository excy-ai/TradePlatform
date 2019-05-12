import { get } from '../../../fetcher/fetcher';
import authSuccess from '../auth/authenticate/authSuccess';
import getMeSuccess from './getMeSuccess';
import getMeError from './getMeError';

export default function getMe() {
  return dispatch => {
    return get(`/api/user/me`)
      .then(response => {
        dispatch(getMeSuccess(response.user.Id));
        dispatch(authSuccess());
      })
      .catch(err => {
        dispatch(getMeError(err));
      });
  };
}
