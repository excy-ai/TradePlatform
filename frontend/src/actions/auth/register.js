import {post} from "../../fetcher/fetcher";
import * as types from './actionTypes';

export default function register(body) {
    return (dispatch) => {
        return post(`http://localhost:3000/api/auth/signup/`, body)
            .then(response => {
                dispatch({
                    type: types.REGISTER_SUCCESS,
                });
                if(response.ok){
                    window.location.pathname='/signin';
                }
            })
            .catch(err => {
                dispatch({
                    type: types.REGISTER_ERROR,
                    error: err
                });
            });
    }
}