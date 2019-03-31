import {post} from "../../fetcher/fetcher";
import * as types from './actionTypes';

export default function addItem(body) {
    return (dispatch) => {
        return post(`http://localhost:3000/api/user/items/add`, body)
            .then(response => {
                console.log(response.json());
                return response.json();
            })
            .then(response => {
                dispatch({
                    type: types.GET_CATEGORY_LIST_SUCCESS,
                    id: response.id
                });
            })
            .catch(err => {
                dispatch({
                    type: types.GET_CATEGORY_LIST_ERROR,
                    error: err
                });
            });
    }
}