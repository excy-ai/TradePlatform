'use strict';

const Router = require('koa-router');
const authController = require('../controllers/AuthController');

module.exports = new Router()
    .post('/signin', authController.signin)
    .post('/signup', authController.signup)
    .post('/signout', authController.signout);