'use strict';

const {Item, User} = require('../models');
const PAGINATION_LIMIT = 25;

async function getAllOnTradeFiltered(ctx) {
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
    let count;
    if (category && inventoryId) {
        count = (await Item.findAndCountAll({
            where: {onTrade: true, category: category, inventory_id: inventoryId},

        })).count;
        items = await Item.findAll({
            where: {onTrade: true, category: category, inventory_id: inventoryId},
            order: [
                ['created_at', order]
            ],
            limit: PAGINATION_LIMIT,
            offset: getOffset(count, page),
        });
    } else if (category) {
        count = (await Item.findAndCountAll({
            where: {onTrade: true, category: category},

        })).count;
        items = await Item.findAll({
            where: {onTrade: true, category: category},
            order: [
                ['created_at', order]
            ],
            limit: PAGINATION_LIMIT,
            offset: getOffset(count, page),
        });
    } else if (userID) {
        count = (await Item.findAndCountAll({
            where: {onTrade: true, inventory_id: inventoryId},

        })).count;
        items = await Item.findAll({
            where: {onTrade: true, inventory_id: inventoryId},
            order: [
                ['created_at', order]
            ],
            limit: PAGINATION_LIMIT,
            offset: getOffset(count, page),
        });
    } else {
        count = (await Item.findAndCountAll({
            where: {onTrade: true},

        })).count;
        items = await Item.findAll({
            where: {onTrade: true},
            order: [
                ['created_at', order]
            ],
            limit: PAGINATION_LIMIT,
            offset: getOffset(count, page),
        });
    }
    let pages = Math.ceil(count / PAGINATION_LIMIT);
    ctx.response.body = {
        pages: pages,
        items
    };
    ctx.response.status = 200;
    return ctx.response;
}

function getOffset(count, page) {
    let pages = Math.ceil(count / PAGINATION_LIMIT);
    if (!page || page <= 0) {
        page = 1;
    } else if (page > pages && pages !== 0) {
        page = pages;
    } else if (pages === 0) {
        page = 1;
    }
    let offset = PAGINATION_LIMIT * (page - 1);
    return offset;
}
//do function with args ({where}) to make getAllOnTradeFiltered method smaller
module.exports = {getAllOnTradeFiltered};