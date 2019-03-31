import {get} from "../../fetcher/fetcher";
import * as types from './actionTypes';

export default function getMe() {
    return (dispatch) => {
        return get(`api/user/me`)
            .then(response => {
                return response;
            })
            .then(response => {
                dispatch({
                    type: types.GET_USER_SUCCESS,
                    userData: response
                });
            })
            .catch(err => {
                dispatch({
                    type: types.GET_USER_ERROR,
                    error: err
                });
            });
    }
}