import * as types from '../actionTypes';

export default function setMarketError(err) {
  return {
    type: types.MARKET_ERROR,
    error: err,
  };
}
