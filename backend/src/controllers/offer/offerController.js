'use strict';
const types = require('./offerTypes');
const {Category, TradeOffer} = require('../../models');

async function create(ctx) {
    ctx.status = 200;
    let user = ctx.state.user;
    const {target, targetItem, offeredItem} = ctx.request.body;

    try {
        let offer = await TradeOffer.create({target, targetItem, offeredItem, status: types.PENDING});
        await user.addTradeOffer(offer);
        if (offer) {
            ctx.response.status = 200;
            ctx.response.body = offer;
        }
        return ctx.response;
    } catch (err) {
        ctx.response.body = err.message;
        ctx.response.status = err.status;
        return ctx.response;
    }
}

async function getSended(ctx) {
    let user = ctx.state.user;
    await TradeOffer.findAll({where: {user_id: user.id}}).then((offers) => {
        ctx.response.body = offers;
    });
    ctx.response.status = 200;
    return ctx.response;
}

async function getTargeted(ctx) {
    let user = ctx.state.user;
    await TradeOffer.findAll({where: {target: user.id, status: types.PENDING}}).then((offers) => {
        ctx.response.body = offers;
    });
    ctx.response.status = 200;
    return ctx.response;
}

async function cancelOffer(ctx) {
}

async function acceptOffer(ctx) {
}

async function rejectOffer(ctx) {
}

module.exports = {create, getSended, getTargeted};