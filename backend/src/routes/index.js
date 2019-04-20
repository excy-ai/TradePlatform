'use strict';

const Router = require('koa-router');
const authRouter = require('./authRouter');
const userRouter = require('./userRouter');
const itemRouter = require('./itemRouter');
const marketRouter = require('./marketRouter');
const offerRouter = require('./offerRouter');

const apiRouter = new Router({prefix: '/api'})
    .use('/auth', authRouter.routes(), authRouter.allowedMethods())
    .use('/user', userRouter.routes(), userRouter.allowedMethods())
    .use('/user', itemRouter.routes(), itemRouter.allowedMethods())
    .use('/market', marketRouter.routes(), marketRouter.allowedMethods())
    .use('/offer', offerRouter.routes(), offerRouter.allowedMethods());

module.exports = new Router()
    .use(apiRouter.routes(), apiRouter.allowedMethods());