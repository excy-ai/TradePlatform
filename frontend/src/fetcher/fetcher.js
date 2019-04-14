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
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        })
    })
        .then((response) => {
            checkStatus(response);
            return response;
        })
        .then((response) => {
            return response.json();
        })
        .catch((err) => {
            return err;
        });
}

export function del(url) {
    return fetch(url, {
        method: 'DELETE'
    })
        .then((response) => {
            checkStatus(response);
            return response;
        })
        .catch((err) => {
            return err;
        });
}

export function patch(url, body) {
    return fetch(url, {
        method: 'PATCH',
        body: JSON.stringify(body),
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        })
    })
        .then((response) => {
            checkStatus(response);
            return response;
        })
        .catch((err) => {
            return err;
        });
}

export function post(url, body) {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })
        .then((response) => {
            checkStatus(response);
            return response;
        })
        .catch((err) => {
            return err;
        });
}