function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  throw new Error(response.statusText);
}

export function get(url) {
  return fetch(url, {
    method: 'GET',
    headers: new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }),
  })
    .then(response => {
      checkStatus(response);
      return response;
    })
    .then(response => {
      return response.json();
    });
}

export function del(url) {
  return fetch(url, {
    method: 'DELETE',
  })
    .then(response => {
      checkStatus(response);
      return response;
    });
}

export function patch(url) {
  return fetch(url, {
    method: 'PATCH',
  })
    .then(response => {
      checkStatus(response);
      return response;
    });
}

export function post(url, body) {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  })
    .then(response => {
      checkStatus(response);
      return response;
    });
}

export function multiPartFormPost(url, file) {
  let formData = new FormData();
  formData.append('image', file);
  return fetch(url, {
    method: 'POST',
    body: formData,
  })
    .then(response => {
      checkStatus(response);
      return response;
    });
}
