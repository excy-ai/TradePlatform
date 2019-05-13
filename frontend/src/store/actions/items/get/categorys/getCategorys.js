import { get } from '../../../../../fetcher/fetcher';
import getCategorysSuccess from './getCategorysSuccess';
import clearItemError from '../../error/clearItemError';
import setItemError from '../../error/setItemError';

export default function getCategorys() {
  return (dispatch) => {
    return get(`/api/user/items/categorys`)
      .then(response => {
        dispatch(getCategorysSuccess(response));
        dispatch(clearItemError());
      })
      .catch(err => {
        dispatch(setItemError(err));
      });
  };
}
