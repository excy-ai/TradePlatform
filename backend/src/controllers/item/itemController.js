'use strict';

const { Item, ListedItem, Category } = require('../../models');

async function addItem(ctx) {
  ctx.status = 200;
  let user = ctx.state.user;
  const itemData = ctx.request.body;
  const { sign, description, category, image } = itemData;
  let newItem = {
    sign: sign,
    description: description,
    category: category,
    image: image,
  };
  if (!(await Category.findOne({ where: { title: category } }))) {
    ctx.response.status = 400;
    ctx.response.body = 'no such category';
    return ctx.response;
  }
  if (await ListedItem.findOne({ where: { sign, category } })) {
    ctx.response.status = 400;
    ctx.response.body =
      'Item with such sign&category already exist, you can add it, instead of creating new';
    return ctx.response;
  }
  await ListedItem.create({ sign, category });
  let createdItem = await Item.create(newItem);
  if (createdItem) {
    ctx.response.status = 200;
    ctx.response.body = createdItem;
  } else {
    ctx.response.status = 400;
    return ctx.response;
  }
  await (await Category.findOne({ where: { title: category } })).addItem(
    createdItem,
  );
  await user.addItem(createdItem);
  return ctx.response;
}

async function addAlreadyListed(ctx) {
  ctx.status = 200;
  let user = ctx.state.user;
  const itemData = ctx.request.body;
  const { sign, description, category, image } = itemData;
  if (!(await Category.findOne({ where: { title: category } }))) {
    ctx.response.status = 400;
    ctx.response.body = 'no such category';
    return ctx.response;
  }
  if (await ListedItem.findOne({ where: { sign, category } })) {
    const newItem = {
      sign: sign,
      description: description,
      category: category,
      image: image,
    };
    let createdItem = await Item.create(newItem);
    if (createdItem) {
      ctx.response.status = 200;
      ctx.response.body = createdItem;
    } else {
      ctx.response.status = 400;
      return ctx.response;
    }
    await (await Category.findOne({ where: { title: category } })).addItem(
      createdItem,
    );
    await user.addItem(createdItem);
    return ctx.response;
  } else {
    ctx.response.status = 400;
    ctx.response.body =
      'Item with such sign&category not listed, you can create it';
    return ctx.response;
  }

}

async function addImageForItem(ctx) {
  const { id } = ctx.params;
  let item = await Item.findOne({ where: { Id: id } });

  let imgLink = ctx.req.file.path.substring('public/'.length);
  if (item) {
    item.update({
      image: `/${imgLink}`,
    });
  } else {
    ctx.response.status = 400;
    return ctx.response;
  }
  ctx.response.status = 200;
  ctx.response.body = { image: `/${imgLink}` };
  return ctx.response;
}

async function switchOnTradeStatus(ctx) {
  let user = ctx.state.user;
  let items = await user.getItems();
  let id = ctx.request.body.id;
  if (
    items.map(item => {
      if (id === item.Id) {
        return item;
      }
    }).length === 0
  ) {
    ctx.response.body = 'current user doesnt have specified item';
    ctx.response.status = 404;
    return ctx.response;
  }
  let specItem = await Item.findOne({ where: { Id: id } });
  specItem.update({
    onTrade: !specItem.onTrade,
  });
  ctx.response.body = 'onTrade status of specified item switched';
  ctx.response.status = 200;
  return ctx.response;
}

async function getListed(ctx) {
  await ListedItem.findAll().then(items => {
    ctx.response.body = items;
  });
  ctx.response.status = 200;
  return ctx.response;
}

async function getCategorys(ctx) {
  await Category.findAll({
    order: [['uniqueness', 'ASC']],
  }).then(categorys => {
    ctx.response.body = categorys;
  });
  ctx.response.status = 200;
  return ctx.response;
}

module.exports = { addItem, switchOnTradeStatus, getListed, getCategorys, addImageForItem, addAlreadyListed };
