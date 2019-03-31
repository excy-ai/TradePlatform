import {post} from "../../fetcher/fetcher";
import * as types from './actionTypes';

export default function authenticate(body) {
    return (dispatch) => {
        return post(`api/auth/signin/`, body)
            .then(response => {
                dispatch({
                    type: types.REGISTER_SUCCESS,
                });
            })
            .catch(err => {
                dispatch({
                    type: types.REGISTER_ERROR,
                    error: err
                });
            });
    }
}