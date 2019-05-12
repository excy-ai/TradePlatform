import { get } from '../../../../../fetcher/fetcher';
import getCategorysSuccess from './getCategorysSuccess';
import getCategorysError from './getCategorysError';

export default function getCategorys() {
  return (dispatch) => {
    return get(`/api/user/items/categorys`)
      .then(response => {
        dispatch(getCategorysSuccess(response));
      })
      .catch(err => {
        dispatch(getCategorysError(err));
      });
  };
}
