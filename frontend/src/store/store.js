import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import appReducer from '../reducers/appReducer';


export const newStore = () => {
  return createStore(
    appReducer,
    applyMiddleware(thunk),
  );
};