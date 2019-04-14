import {post} from "../../fetcher/fetcher";
import * as types from './actionTypes';

export default function getOnTrade() {
    let body = {
        // userID:,
        // category:,
        // order:,
        page: 1
    };
    return (dispatch) => {
        return post(`api/market/search`, body)
            .then(response => {
                dispatch({
                    type: types.GET_CATEGORY_LIST_SUCCESS,
                    itemsOnTrade: response.items
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
