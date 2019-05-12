import { get } from '../../../fetcher/fetcher';
import getInfoSuccess from './getInfoSuccess';
import getInfoError from './getInfoError';

export default function getInfo(id) {
  return dispatch => {
    return get(`/api/user/info?id=${id}`)
      .then(response => {
        dispatch(getInfoSuccess(response.items));
      })
      .catch(err => {
        dispatch(getInfoError(err));
      });
  };
}
