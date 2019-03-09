const http = require('http');
const fs = require('fs');
const userdata = fs.readFileSync('./users.json', 'utf8');

let users = JSON.parse(userdata);
let currentId = users.length;
let port = 8000;
if (process.env.port !== undefined) {
    port = process.env.port;
}

const requestHandler = (request, response) => {
    console.log(request.url + " " + request.method);
    console.log("id: " + request.url.toString().split("/")[2]);
};
const server = new http.createServer(requestHandler);
server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err);
    }
    console.log(`server is listening on ${port}`);
});

server.on('request', (request, response) => {
    let id = request.url.toString().split("/")[2];
    if (isUsersRequest('GET', request) && id === undefined) {
        response.statusCode = 201;
        response.setHeader('Content-Type', 'application/json');
        response.end(JSON.stringify(users));
    }
});

server.on('request', (request, response) => {
    let id = request.url.toString().split("/")[2];
    if (isUsersRequest('GET', request) && id !== undefined) {
        response.setHeader('Content-Type', 'application/json');
        let user = users.find(item => item.id === parseInt(id));
        if (user === undefined) {
            response.statusCode = 404;
            response.end();
        }
        response.statusCode = 201;
        response.end(JSON.stringify(user));
    }
});

server.on('request', (request, response) => {
    if (isUsersRequest('POST', request)) {
        let body = [];
        request.on('data', (chunk) => {
            body.push(chunk);
        });
        request.on('end', () => {
            body = Buffer.concat(body).toString();
            if (body === '' || body === null) {
                response.statusCode = 404;
                response.end('bad');
            } else {
                body = JSON.parse(body);
                currentId++;
                let elem = {"id": currentId};
                Object.keys(body).forEach((item) => {
                    elem[item] = body[item];
                });
                users.push(elem);
                console.log(elem);
                response.statusCode = 200;
                response.end('ok');
            }
        });
    }
});

server.on('request', (request, response) => {
    let id = request.url.toString().split("/")[2];
    if (isUsersRequest('PUT', request) && (id === undefined || id === "")) {
        response.statusCode = 404;
        response.end();
        return;
    }
    if (isUsersRequest('PUT', request) && id !== undefined) {
        response.setHeader('Content-Type', 'application/json');
        let user = users.find(item => item.id === parseInt(id));
        if (user === undefined) {
            response.statusCode = 404;
            response.end("");
            return;
        }
        let body = [];
        request.on('data', (chunk) => {
            body.push(chunk);
        });
        request.on('end', () => {
            body = Buffer.concat(body).toString();
            if (body === '' || body === null) {
                response.statusCode = 404;
                response.end();
            } else {
                body = JSON.parse(body);
                let data = {firstName, lastName, age} = body;
                if (data.firstName !== undefined) {
                    user.firstName = data.firstName;
                }
                if (data.lastName !== undefined) {
                    user.lastName = data.lastName;
                }
                if (data.age !== undefined) {
                    user.age = data.age;
                }
                response.statusCode = 200;
                response.end('ok');
            }
        });
    }
});

server.on('request', (request, response) => {
    let id = request.url.toString().split("/")[2];
    if (isUsersRequest('DELETE', request) && (id !== undefined || id === "")) {
        response.setHeader('Content-Type', 'application/json');
        let userIndex = users.findIndex(item => item.id === parseInt(id));
        if (userIndex === -1) {
            response.statusCode = 404;
            response.end();
        }
        users.splice(userIndex, 1);
        response.statusCode = 204;
        response.end();
    }
});

function isUsersRequest(method, request) {
    let url = request.url;
    let path = url.substr(0, 6);
    return request.method === method && path === '/users';
}