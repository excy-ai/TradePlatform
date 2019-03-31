import {post} from "../../fetcher/fetcher";
import * as types from './actionTypes';

export default function addItem(body) {
    return (dispatch) => {
        return post(`api/user/items/add`, body)
            .then(response => {
                return response;
            })
            .then(response => {
                dispatch({
                    type: types.ITEM_ADD_SUCCESS
                });
                return response;
            })
            .catch(err => {
                dispatch({
                    type: types.ITEM_ADD_ERROR,
                    error: err
                });
            });
    }
}