'use strict';

const Router = require('koa-router');
const {authCheck} = require('../middlewares/authCheck');
const userController = require('../controllers/userController');

module.exports = new Router()
    .get('/me', authCheck, userController.getMe)
    .get('/info', authCheck, userController.getUserItemList);