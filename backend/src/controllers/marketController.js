'use strict';

const {Item, User} = require('../models');
const PAGINATION_LIMIT = 25;

async function getAllOnTrade(ctx) {
    let offset = 0;
    let {category, order, page, userID} = ctx.request.body;

    if (!order || (order !== "ASC" && order !== "DESC")) {
        order = "ASC";
    }
    let inventoryId;
    if (userID !== undefined && userID !== null) {
        let user = await User.findOne({where: {id: userID}});
        if (user) {
            inventoryId = (await user.getInventory()).id;
        }
    }
    let items;
    let pages;
    let count;
    if (category && inventoryId) {
        count = (await Item.findAndCountAll({
            where: {onTrade: true, category: category, inventory_id: inventoryId},

        })).count;
        pages = Math.ceil(count / PAGINATION_LIMIT);
        if (!page || page<=0) {
            page = 1;
        } else if (page > pages) {
            page = pages;
        }
        offset = PAGINATION_LIMIT * (page - 1);

        items = await Item.findAll({
            where: {onTrade: true, category: category, inventory_id: inventoryId},
            order: [
                ['created_at', order]
            ],
            limit: PAGINATION_LIMIT,
            offset: offset,
        });
    } else if (category) {
        count = (await Item.findAndCountAll({
            where: {onTrade: true, category: category},

        })).count;
        pages = Math.ceil(count / PAGINATION_LIMIT);
        if (!page || page<=0) {
            page = 1;
        } else if (page > pages) {
            page = pages;
        }
        offset = PAGINATION_LIMIT * (page - 1);

        items = await Item.findAll({
            where: {onTrade: true, category: category},
            order: [
                ['created_at', order]
            ],
            limit: PAGINATION_LIMIT,
            offset: offset,
        });
    } else if (userID) {
        count = (await Item.findAndCountAll({
            where: {onTrade: true, inventory_id: inventoryId},

        })).count;
        pages = Math.ceil(count / PAGINATION_LIMIT);
        if (!page || page<=0) {
            page = 1;
        } else if (page > pages) {
            page = pages;
        }
        offset = PAGINATION_LIMIT * (page - 1);

        items = await Item.findAll({
            where: {onTrade: true, inventory_id: inventoryId},
            order: [
                ['created_at', order]
            ],
            limit: PAGINATION_LIMIT,
            offset: offset,
        });
    } else {
        count = (await Item.findAndCountAll({
            where: {onTrade: true},

        })).count;
        pages = Math.ceil(count / PAGINATION_LIMIT);
        if (!page || page<=0) {
            page = 1;
        } else if (page > pages) {
            page = pages;
        }
        offset = PAGINATION_LIMIT * (page - 1);

        items = await Item.findAll({
            where: {onTrade: true},
            order: [
                ['created_at', order]
            ],
            limit: PAGINATION_LIMIT,
            offset: offset,
        });
    }
    ctx.response.body = items;
    ctx.response.status = 200;
    return ctx.response;
}


module.exports = {getAllOnTrade};