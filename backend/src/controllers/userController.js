'use strict';

const {Item} = require('../models');

async function getMe(ctx) {
    ctx.status = 200;
    let user = ctx.state.user;
    let items = await Item.findAll({where: {user_id: user.id}, order: [
            ['sign', 'ASC'],
        ]});
    ctx.body = {
        "user": user,
        "items": items
    };
    return ctx.response;
}

module.exports = {getMe};