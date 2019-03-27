'use strict';

const {Item} = require('../models');

async function addItem(ctx) {
    ctx.status = 200;
    let user = ctx.state.user;
    let inventory = await user.getInventory();
    const itemData = ctx.request.body;
    // let newItem = {extract from body};
    //await Item.create(newItem) + await inventory.addItem(...)
    return ctx.response;
}


module.exports = {addItem};