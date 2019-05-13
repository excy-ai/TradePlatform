import { get } from '../../../../../fetcher/fetcher';
import getUserItemsSuccess from './getUserItemsSuccess';
import clearItemError from '../../error/clearItemError';
import setItemError from '../../error/setItemError';

export default function getItems() {
  return dispatch => {
    return get(`/api/user/me`)
      .then(response => {
        dispatch(getUserItemsSuccess(response.items));
        dispatch(clearItemError());
      })
      .catch(err => {
        dispatch(setItemError(err));
      });
  };
}
