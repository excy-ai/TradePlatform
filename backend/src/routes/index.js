'use strict';

const Router = require('koa-router');
const authRouter = require('./AuthRouter');
const userRouter = require('./UserRouter');
const itemRouter = require('./ItemRouter');

const apiRouter = new Router({prefix: '/api'})
    .use('/auth', authRouter.routes(), authRouter.allowedMethods())
    .use('/user', userRouter.routes(), userRouter.allowedMethods())
    .use('/user', itemRouter.routes(), itemRouter.allowedMethods());

module.exports = new Router()
    .use(apiRouter.routes(), apiRouter.allowedMethods());