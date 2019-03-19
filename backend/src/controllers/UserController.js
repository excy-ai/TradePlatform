'use strict';

const {User} = require('../models');

async function getMe(ctx) {
    if (ctx.isUnauthenticated()) {
        ctx.throw(401, 'Unauthenticated');
    }
    ctx.status = 200;
    let user = ctx.state.user;
    let inventory = await user.getInventory();
    let items = await inventory.getItems();
    ctx.body = {
        "user": user,
        "inventory": inventory,
        "items": items
    };
    return ctx.response;
}

module.exports = {getMe};