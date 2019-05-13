import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import multi from 'redux-multi';

import itemReducer from '../reducers/itemReducer';
import authReducer from '../reducers/authReducer';
import marketReducer from '../reducers/marketReducer';
import offerReducer from '../reducers/offerReducer';
import userReducer from '../reducers/userReducer';
import meReducer from '../reducers/meReducer';

const appReducer = combineReducers({
  itemReducer,
  authReducer,
  marketReducer,
  offerReducer,
  userReducer,
  meReducer,
});

export const newStore = () => {
  return createStore(
    appReducer,
    applyMiddleware(
      thunk,
      multi,
    ),
  );
};