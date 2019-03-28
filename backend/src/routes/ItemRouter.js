'use strict';

const Router = require('koa-router');
const {authCheck} = require('../middlewares/AuthCheck');
const itemController = require('../controllers/ItemController');

module.exports = new Router()
    .post('/items/add', authCheck, itemController.addItem)
    .get('/items/listed', itemController.getListed)
    .get('/items/categorys', itemController.getCategorys);