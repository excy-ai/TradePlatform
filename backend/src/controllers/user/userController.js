"use strict";

const { Item, User } = require("../../models");

async function getMe(ctx) {
  ctx.status = 200;
  let user = ctx.state.user;
  let items = await Item.findAll({
    where: { user_id: user.id },
    order: [["sign", "ASC"]]
  });
  ctx.body = {
    user: user,
    items: items
  };
  return ctx.response;
}

async function getUserItemList(ctx) {
  let { id } = ctx.query;
  let user = await User.find({ where: { id } });
  if (!user) {
    ctx.response.status = 404;
    return ctx.response;
  }
  let items = await user.getItems();
  ctx.response.body = { items: items };
  ctx.response.status = 200;
  return ctx.response;
}

module.exports = { getMe, getUserItemList };
