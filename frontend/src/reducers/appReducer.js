import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import authReducer from './authReducer';
import marketReducer from './marketReducer';
import userReducer from './userReducer';
import offerReducer from './offerReducer';
import meReducer from './meReducer';

const appReducer = combineReducers({
  itemReducer,
  authReducer,
  marketReducer,
  offerReducer,
  userReducer,
  meReducer,
});

export default (state = {}, action) => {
  return appReducer(state, action);
};
