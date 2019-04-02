import {post} from "../../fetcher/fetcher";
import * as types from '../user/actionTypes';

export default function switchTradeStatus(id) {
    let body = {id};
    return (dispatch) => {
        return post(`api/user/items/trade/switchStatus`, body)
            .then(response => {
                return response;
            })
            .then(response => {
                dispatch({
                    type: types.STATUS_SWITCH_SUCCESS,
                    id: id
                });
                return response;
            })
            .catch(err => {
                dispatch({
                    type: types.STATUS_SWITCH_ERROR,
                    error: err
                });
            });
    }
}