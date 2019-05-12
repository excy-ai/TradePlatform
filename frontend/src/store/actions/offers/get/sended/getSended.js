import { get } from '../../../../../fetcher/fetcher';
import getSendedSuccess from './getSendedSuccess';
import getSendedError from './getSendedError';

export default function getSended() {
  return (dispatch) => {
    return get(`/api/offers/sended`)
      .then(response => {
        dispatch(getSendedSuccess(response));
      })
      .catch(err => {
        dispatch(getSendedError(err));
      });
  };
}
