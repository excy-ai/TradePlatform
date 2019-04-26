'use strict';
const types = require('./offerTypes');
const { TradeOffer, User } = require('../../models');

async function create(ctx) {
  ctx.status = 200;
  let user = ctx.state.user;
  const { target, targetItem, offeredItem } = ctx.request.body;
  let offered = await (await user.getItems()).findOne({ where: { Id: offeredItem } });
  if (!offered) {
    ctx.response.status = 400;
    return ctx.response;
  }
  let targetUser = await User.findOne({ where: { Id: target } });
  if (targetUser) {
    let item = await (await targetUser.getItems()).findOne({ where: { Id: targetItem, onTrade: true } });
    //check if item ontrade status === true, else send status 400 PS added
    //check existance of selected items on targeted user
    //TODO: check how works
    if (!item) {
      ctx.response.status = 400;
      return ctx.response;
    }
  } else {
    ctx.response.status = 400;
    return ctx.response;
  }
  let offer = await TradeOffer.create({
    target,
    targetItem,
    offeredItem,
    status: types.PENDING,
  });
  await user.addTradeOffer(offer);
  if (offer) {
    ctx.response.status = 200;
    ctx.response.body = offer;
  }
  return ctx.response;
}

async function getSended(ctx) {
  let user = ctx.state.user;
  await TradeOffer.findAll({ where: { user_id: user.Id } }).then(offers => {
    ctx.response.body = offers;
  });
  ctx.response.status = 200;
  return ctx.response;
}

async function getTargeted(ctx) {
  let user = ctx.state.user;
  await TradeOffer.findAll({
    where: { target: user.Id, status: types.PENDING },
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
  let offer = await offers.find({ where: { Id: offerId } });
  //TODO:integrate this to frontend
  if (offer) {
    if (offer.target !== user.Id) {
      ctx.response.status = 400;
      return ctx.response;
    }
    if (offer.status === types.PENDING) {
      //swap target/offered item holders
      //remove other offers where items used
      //TODO: check how works
      let offerer = await User.findOne({ where: { Id: offer.user_id } });
      let userItem = await (await user.getItems())
        .findOne({ where: { Id: offer.targetItem } });
      let offeredItem = await (await offerer.getItems())
        .findOne({ where: { Id: offer.offeredItem } });
      if (userItem && offeredItem) {
        user.removeItem(userItem);
        user.addItem(offeredItem);
        offerer.removeItem(offeredItem);
        offerer.addItem(userItem);
      } else {
        ctx.response.status = 400;
        offer.update({
          status: types.CANCELED,
        });
        return ctx.response;
      }
      offer.update({
        status: types.COMPLETED,
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
  let offer = await offers.find({ where: { Id: offerId } });
  if (offer) {
    if (offer.status === types.PENDING) {
      offer.update({
        status: types.CANCELED,
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
  let offer = await offers.find({ where: { Id: offerId } });
  if (offer) {
    if (offer.status === types.PENDING) {
      offer.update({
        status: types.REJECTED,
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
  rejectOffer,
};
