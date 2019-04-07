import {get} from "../../fetcher/fetcher";
import * as types from './actionTypes';

export default function getCategorys() {
    return (dispatch) => {
        return get(`api/user/items/categorys`)
            .then(response => {
                // Do you really need this extra 'then' to handle such kind of logic?
                // What do you think about moving this near it is needed?
                // --mrurenko 2019-04-06
                return response.map(item => item.title);
            })
            .then(response => {
                dispatch({
                    type: types.GET_CATEGORY_LIST_SUCCESS,
                    categoryList: response
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
