import {combineReducers} from 'redux';
import itemReducer from './itemReducer';
import authReducer from './authReducer';

const appReducer = combineReducers({
    itemReducer,
    authReducer
});

export default (state = {}, action) => {
    return appReducer(state, action);
}