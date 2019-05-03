import { get } from '../../fetcher/fetcher';

export default function getOfferItems(id) {
  return get(`/api/offers/${id}/info`)
    .then(response => {
      return response.json();
    })
    .catch(err => {
      throw err;
    });
}
