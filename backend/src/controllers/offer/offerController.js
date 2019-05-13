'use strict';
const types = require('./offerTypes');
const { TradeOffer, User, Item } = require('../../models');

async function create(ctx) {
  ctx.status = 200;
  let user = ctx.state.user;
  const { target, targetItem, offeredItem } = ctx.request.body;
  let offered = (await user.getItems()).find((item) => item.Id === offeredItem);
  if (!offered) {
    ctx.response.body = 'current user does not have offered item';
    ctx.response.status = 400;
    return ctx.response;
  }
  let targetUser = await User.findOne({ where: { Id: target } });
  if (targetUser) {
    let item = (await targetUser.getItems()).find((item) => item.Id === targetItem && item.onTrade === true);
    if (!item) {
      ctx.response.body = 'target user does not have specified item';
      ctx.response.status = 400;
      return ctx.response;
    }
  } else {
    ctx.response.body = 'target user does not exists';
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
  await TradeOffer.findAll({
    where: { user_id: user.Id },
    order: [['created_at', 'DESC']],
  }).then(offers => {
    ctx.response.body = offers;
  });
  ctx.response.status = 200;
  return ctx.response;
}

async function getTargeted(ctx) {
  let user = ctx.state.user;
  await TradeOffer.findAll({
    where: { target: user.Id, status: types.PENDING },
    order: [['created_at', 'DESC']],
  }).then(offers => {
    ctx.response.body = offers;
  });
  ctx.response.status = 200;
  return ctx.response;
}

async function acceptOffer(ctx) {
  let user = ctx.state.user;
  const offerId = ctx.params.id;
  let offer = await TradeOffer.findOne({ where: { id: offerId } });
  // let offer = offers.find(item => item.id === offerId);
  console.log(offerId);
  console.log(offer);
  if (offer) {
    if (offer.target !== user.Id) {
      ctx.response.status = 400;
      return ctx.response;
    }

    if (offer.status === types.PENDING) {
      let offerer = await User.findOne({ where: { Id: offer.user_Id } });
      let userItem = (await user.getItems())
        .find(item => item.Id === offer.targetItem);
      let offeredItem = (await offerer.getItems())
        .find(item => item.Id === offer.offeredItem);
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
  const offerId = ctx.params.id;
  let offers = await user.getTradeOffers();
  let offer = offers.find(item => item.id === offerId);
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
  const offerId = ctx.params.id;
  let offer = await TradeOffer.findOne({ where: { id: offerId } });
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

async function getOfferItems(ctx) {
  let user = ctx.state.user;
  const offerId = ctx.params.id;
  let offer = await TradeOffer.findOne({ where: { Id: offerId } });
  let offered = await Item.findOne({ where: { Id: offer.offeredItem } });
  let target = await Item.findOne({ where: { Id: offer.targetItem } });
  if (offered && target) {
    ctx.response.body = { target, offered };
    ctx.response.status = 200;
    return ctx.response;
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
  getOfferItems,
};
