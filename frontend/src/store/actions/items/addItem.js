import { post, multiPartFormPost } from '../../../fetcher/fetcher';
import * as types from './actionTypes';

export default function addItem(body, file) {
  return (dispatch) => {
    return post(`/api/user/items/add`, body)
      .then(response => {
        return response.json();
      }).then(response => {
        let item = response;
        return multiPartFormPost(`/api/user/items/${response.Id}/image`, file)
          .then(response => {
            return response.json();
          }).then(response => {
            dispatch({
              type: types.ITEM_ADD_SUCCESS,
              item: { ...item, image: response.image },
            });
          });
      })
      .catch(err => {
        dispatch({
          type: types.ITEM_ADD_ERROR,
          error: err,
        });
      });
  };
}
