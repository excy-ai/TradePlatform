import * as types from '../../actionTypes';

export default function getTargetedError(err) {
  return {
    type: types.GET_TARGETED_ERROR,
    error: err,
  };
}