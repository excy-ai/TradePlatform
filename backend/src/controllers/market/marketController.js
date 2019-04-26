'use strict';

const { Item, User } = require('../../models');
const PAGINATION_LIMIT = 25;

async function getAllOnTradeFiltered(ctx) {
  let { category, order, page, userID } = ctx.query;

  if (!order || (order !== 'ASC' && order !== 'DESC')) {
    order = 'ASC';
  }
  let items;
  let count;
  if (category && userID) {
    count = (await Item.findAndCountAll({
      where: { onTrade: true, category: category, user_id: userID },
    })).count;
    items = await Item.findAll({
      where: { onTrade: true, category: category, user_id: userID },
      order: [['created_at', order]],
      limit: PAGINATION_LIMIT,
      offset: getOffset(count, page),
    });
  } else if (category) {
    count = (await Item.findAndCountAll({
      where: { onTrade: true, category: category },
    })).count;
    items = await Item.findAll({
      where: { onTrade: true, category: category },
      order: [['created_at', order]],
      limit: PAGINATION_LIMIT,
      offset: getOffset(count, page),
    });
  } else if (userID) {
    count = (await Item.findAndCountAll({
      where: { onTrade: true, user_id: userID },
    })).count;
    items = await Item.findAll({
      where: { onTrade: true, user_id: userID },
      order: [['created_at', order]],
      limit: PAGINATION_LIMIT,
      offset: getOffset(count, page),
    });
  } else {
    count = (await Item.findAndCountAll({
      where: { onTrade: true },
    })).count;
    items = await Item.findAll({
      where: { onTrade: true },
      order: [['created_at', order]],
      limit: PAGINATION_LIMIT,
      offset: getOffset(count, page),
    });
  }
  let pages = Math.ceil(count / PAGINATION_LIMIT);
  ctx.response.body = {
    pages: pages,
    items,
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
module.exports = { getAllOnTradeFiltered };
