import { get } from '../../../../../fetcher/fetcher';
import getUserItemsSuccess from './getUserItemsSuccess';
import getUserItemsError from './getUserItemsError';

export default function getItems() {
  return dispatch => {
    return get(`/api/user/me`)
      .then(response => {
        dispatch(getUserItemsSuccess(response.items));
      })
      .catch(err => {
        dispatch(getUserItemsError(err));
      });
  };
}
