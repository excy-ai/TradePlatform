import * as types from '../../actionTypes';

export default function getTargetedSuccess(targeted) {
  return {
    type: types.GET_TARGETED_SUCCESS,
    targeted: targeted,
  };
}