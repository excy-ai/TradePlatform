import {combineReducers} from 'redux';
import itemReducer from './itemReducer';
import authReducer from './authReducer';
import userReducer from './userReducer';

const appReducer = combineReducers({
    itemReducer,
    authReducer,
    userReducer
});

export default (state = {}, action) => {
    return appReducer(state, action);
}