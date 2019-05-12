import { post, multiPartFormPost } from '../../../../fetcher/fetcher';
import addItemSuccess from './addItemSuccess';
import addItemError from './addItemError';

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
            dispatch(addItemSuccess(item, response.image));
          });
      })
      .catch(err => {
        dispatch(addItemError(err));
      });
  };
}
