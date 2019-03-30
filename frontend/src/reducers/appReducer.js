import {combineReducers} from 'redux';
import itemReducer from './itemReducer';

const appReducer = combineReducers({
    itemReducer
});

export default (state = {}, action) => {
    return appReducer(state, action);
}