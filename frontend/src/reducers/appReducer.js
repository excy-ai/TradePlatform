import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import authReducer from './authReducer';
import marketReducer from './marketReducer';
import userReducer from './userReducer';
import meReducer from './meReducer';

const appReducer = combineReducers({
  itemReducer,
  authReducer,
  marketReducer,
  userReducer,
  meReducer,
});

export default (state = {}, action) => {
  return appReducer(state, action);
};
