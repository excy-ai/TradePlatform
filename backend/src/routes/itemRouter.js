'use strict';

const Router = require('koa-router');
const {authCheck} = require('../middlewares/authCheck');
const itemController = require('../controllers/itemController');

module.exports = new Router()
    .post('/items/add', authCheck, itemController.addItem)
    .get('/items/listed', itemController.getListed)
    .get('/items/categorys', itemController.getCategorys);