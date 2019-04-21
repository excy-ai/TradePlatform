"use strict";
const types = require("./offerTypes");
const { Category, TradeOffer } = require("../../models");

async function create(ctx) {
  ctx.status = 200;
  let user = ctx.state.user;
  const { target, targetItem, offeredItem } = ctx.request.body;

  try {
    //TODO: check if item ontrade status === true, else send status 400
    let offer = await TradeOffer.create({
      target,
      targetItem,
      offeredItem,
      status: types.PENDING
    });
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
  await TradeOffer.findAll({ where: { user_id: user.id } }).then(offers => {
    ctx.response.body = offers;
  });
  ctx.response.status = 200;
  return ctx.response;
}

async function getTargeted(ctx) {
  let user = ctx.state.user;
  await TradeOffer.findAll({
    where: { target: user.id, status: types.PENDING }
  }).then(offers => {
    ctx.response.body = offers;
  });
  ctx.response.status = 200;
  return ctx.response;
}

async function acceptOffer(ctx) {
  let user = ctx.state.user;
  const { offerId } = ctx.state.body;
  let offers = await user.getTradeOffers();
  let offer = await offers.find({ where: { id: offerId } });
  //TODO:swap target/offered item holders
  //TODO:integrate this to frontend
  if (offer) {
    if (offer.status === types.PENDING) {
      offer.update({
        status: types.COMPLETED
      });
      ctx.response.status = 204;
      return ctx.response;
    } else {
      ctx.response.status = 400;
      return ctx.response;
    }
  } else {
    ctx.response.status = 404;
    return ctx.response;
  }
}

async function cancelOffer(ctx) {
  let user = ctx.state.user;
  const { offerId } = ctx.state.body;
  let offers = await user.getTradeOffers();
  let offer = await offers.find({ where: { id: offerId } });
  if (offer) {
    if (offer.status === types.PENDING) {
      offer.update({
        status: types.CANCELED
      });
      ctx.response.status = 204;
      return ctx.response;
    } else {
      ctx.response.status = 400;
      return ctx.response;
    }
  } else {
    ctx.response.status = 404;
    return ctx.response;
  }
}

async function rejectOffer(ctx) {
  let user = ctx.state.user;
  const { offerId } = ctx.state.body;
  let offers = await user.getTradeOffers();
  let offer = await offers.find({ where: { id: offerId } });
  if (offer) {
    if (offer.status === types.PENDING) {
      offer.update({
        status: types.REJECTED
      });
      ctx.response.status = 204;
      return ctx.response;
    } else {
      ctx.response.status = 400;
      return ctx.response;
    }
  } else {
    ctx.response.status = 404;
    return ctx.response;
  }
}

module.exports = {
  create,
  getSended,
  getTargeted,
  acceptOffer,
  cancelOffer,
  rejectOffer
};
