import { get } from '../../../../../fetcher/fetcher';
import getTargetedSuccess from './getTargetedSuccess';
import getTargetedError from './getTargetedError';

export default function getTargeted() {
  return (dispatch) => {
    return get(`/api/offers/targeted`)
      .then(response => {
        dispatch(getTargetedSuccess(response));
      })
      .catch(err => {
        dispatch(getTargetedError(err));
      });
  };
}
