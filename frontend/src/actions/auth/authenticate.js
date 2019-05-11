import { post } from '../../fetcher/fetcher';
import * as types from './actionTypes';

export default function authenticate(body) {
  return dispatch => {
    // Better to create a separate actionCreator for this action.
    // It allows to use actions more flexible later.
    // This comment is actual for all your async actionCreators.
    // --mrurenko 2019-05-10
    dispatch({
      type: types.AUTH_PENDING,
      authenticated: false,
      error: null,
    });
    return post(`/api/auth/signin/`, body)
      .then(response => {
        // Better to create a separate actionCreator for this action.
        // --mrurenko 2019-05-10
        dispatch({
          type: types.AUTH_SUCCESS,
          authenticated: true,
          error: null,
        });
      })
      .catch(err => {
        // Better to create a separate actionCreator for this action.
        // --mrurenko 2019-05-10
        dispatch({
          type: types.AUTH_ERROR,
          error: err,
        });
      });
  };
}
