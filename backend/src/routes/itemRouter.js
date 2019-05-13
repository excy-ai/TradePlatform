'use strict';

const Router = require('koa-router');
const { authCheck } = require('../middlewares/authCheck');
const imageMulter = require('../middlewares/multer');
const itemController = require('../controllers/item/itemController');

module.exports = new Router()
  .post('/items/add', authCheck, itemController.addItem)
  .post('/items/addlisted', authCheck, itemController.addAlreadyListed)
  .post('/items/:id/image', authCheck, imageMulter, itemController.addImageForItem)
  .post('/items/trade/switchStatus', authCheck, itemController.switchOnTradeStatus)
  .get('/items/listed', itemController.getListed)
  .get('/items/categorys', itemController.getCategorys);
