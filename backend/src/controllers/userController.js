'use strict';

const {Item} = require('../models');

async function getMe(ctx) {
    ctx.status = 200;
    let user = ctx.state.user;
    let inventory = await user.getInventory();
    let items = await Item.findAll({where: {inventory_id: inventory.id}, order: [
            ['sign', 'ASC'],
        ]});
    ctx.body = {
        "user": user,
        "inventory": inventory,
        "items": items
    };
    return ctx.response;
}

module.exports = {getMe};