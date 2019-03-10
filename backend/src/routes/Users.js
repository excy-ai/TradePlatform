'use strict';

const Router = require('koa-router');
const Item = require('../models/Item');
const User = require('../models/User');
const Inventory = require('../models/Inventory');
const users = [];
module.exports = new Router().post('/users', async (ctx) => {
    let user = new User(ctx.request.body);
    users.push(user);
    let inv = new Inventory({userId: `${user.id}`, inventoryId: `${user.inventoryId}`});
    let item = new Item(Object.assign({},
        {
            "name": "Item",
            "description": "item description",
            "category": "none",
            "pic": "pic"
        }, {"masterId": user.id}));
    inv.addItem(item);
    console.log(inv);
    ctx.response.status = 200;
    ctx.response.body = Object.assign({}, inv, user);
}).get('/users', async (ctx) => {
    ctx.body = users;
}).get('/users/:id', async (ctx) => {
    let user = users.find((item) => item._id === ctx.params.id);
    if (user !== undefined) {
        ctx.response.body = user;
    } else {
        ctx.status = 404;
    }
}).put('/users/:id', async (ctx) => {
    let {firstName, lastName, password, email} = ctx.request.body;
    let userIndex = users.findIndex(item => item.id === ctx.params.id);
    console.log(ctx.params.id);
    console.log(users[0]);
    if (userIndex === -1) {
        ctx.status = 404;
    } else {
        ctx.status = 200;
        if (isValidStr(firstName)) {
            users[userIndex]._firstName = firstName;
        }
        if (isValidStr(lastName)) {
            users[userIndex]._lastName = lastName;
        }
        if (isValidStr(password)) {
            users[userIndex]._password = password;
        }
        if (isValidStr(email)) {
            users[userIndex]._email = email;
        }
    }
}).delete('/users/:id', async (ctx) => {
    let userIndex = users.findIndex(item => item.id === ctx.params.id);
    console.log(userIndex);
    if (userIndex === -1) {
        ctx.status = 404;
    } else {
        users.splice(userIndex, 1);
        ctx.status = 204;
        ctx.response.body = users;
    }
});

let isValidStr = (str) => {
    return str !== undefined && str !== "" && str !== null;
};