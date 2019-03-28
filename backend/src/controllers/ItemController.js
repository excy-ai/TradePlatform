'use strict';

const {Item, ListedItem, Category} = require('../models');

async function addItem(ctx) {
    ctx.status = 200;
    let user = ctx.state.user;
    let inventory = await user.getInventory();
    const itemData = ctx.request.body;
    const {sign, description, category, pic} = itemData;
    let newItem = {
        sign: sign,
        description: description,
        category: category,
        pic: pic
    };
    try {
        if (!(await Category.findOne({where: {title: category}}))) {
            ctx.throw(400, "no such category");
        }
        if (await ListedItem.findOne({where: {sign}})) {
            ctx.throw(400, "Item with such sign already exist, you can add it, instead of creating new");
        }
        await ListedItem.create(newItem);
        let createdItem = await Item.create(newItem);
        await (await Category.findOne({where: {title: category}})).addItem(createdItem);
        await inventory.addItem(createdItem);
        if (createdItem) {
            ctx.response.status = 200;
            ctx.response.body = createdItem;
        }
        return ctx.response;
    } catch (err) {
        ctx.response.body = err.message;
        ctx.response.status = err.status;
        return ctx.response;
    }
}

async function getListed(ctx) {
    await ListedItem.findAll().then((items) => {
        ctx.response.body = items;
    });
    ctx.response.status = 200;
    return ctx.response;
}

async function getCategorys(ctx) {
    await Category.findAll().then((categorys) => {
        ctx.response.body = categorys;
    });
    ctx.response.status = 200;
    return ctx.response;
}

module.exports = {addItem, getListed, getCategorys};