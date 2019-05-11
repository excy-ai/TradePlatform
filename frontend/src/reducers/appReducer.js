// Please move this whole 'reducers' folder into the store folder.
// --mrurenko 2019-05-10
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

// Could you just export appReducer directly?
// --mrurenko 2019-05-10
export default (state = {}, action) => {
  return appReducer(state, action);
};
