'use strict';

const Router = require('koa-router');
const {authCheck} = require('../middlewares/AuthCheck');
const userController = require('../controllers/UserController');

module.exports = new Router()
    .get('/me', authCheck, userController.getMe);