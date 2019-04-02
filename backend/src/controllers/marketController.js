'use strict';

const {Item, User} = require('../models');

async function getAllOnTrade(ctx) {
    let {category, order, userID} = ctx.request.body;
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
    if (category && inventoryId) {
        items = await Item.findAll({
            where: {onTrade: true, category: category, inventory_id: inventoryId},
            order: [
                ['created_at', order]
            ]
        });
    } else if (category) {
        items = await Item.findAll({
            where: {onTrade: true, category: category},
            order: [
                ['created_at', order]
            ]
        });
    } else if (userID) {
        items = await Item.findAll({
            where: {onTrade: true, inventory_id: inventoryId},
            order: [
                ['created_at', order]
            ]
        });
    } else {
        items = await Item.findAll({
            where: {onTrade: true},
            order: [
                ['created_at', order]
            ]
        });
    }
    ctx.response.body = items;
    ctx.response.status = 200;
    return ctx.response;
}


module.exports = {getAllOnTrade};