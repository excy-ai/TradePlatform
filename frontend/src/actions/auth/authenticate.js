import {post} from "../../fetcher/fetcher";
import * as types from './actionTypes';

export default function authenticate(body) {
    return (dispatch) => {
        return post(`api/auth/signin/`, body)
            .then(response => {
                dispatch({
                    type: types.AUTH_SUCCESS,
                    authenticated: (response.status > 199 && response.status < 300)
                });
            })
            .catch(err => {
                dispatch({
                    type: types.AUTH_ERROR,
                    error: err
                });
            });
    }
}