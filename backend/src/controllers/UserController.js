'use strict';

const {User} = require('../models');

async function getMe(ctx) {
    ctx.status = 200;
    let user = ctx.state.user;
    let inventory = await user.getInventory();
    let items = await (await inventory.getItems());
    ctx.body = {
        "user": user,
        "inventory": inventory,
        "items": items
    };
    return ctx.response;
}

module.exports = {getMe};