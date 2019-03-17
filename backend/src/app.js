'use strict';

const PORT = 3000;
const Koa = require('koa');
const serve = require('koa-static');
const koaBody = require('koa-body');
// const Router = require('koa-router');
const bunyan = require('bunyan');
const koaLogger = require('koa-bunyan');

// /////////////////////////
const userRouter = require('./routes/Users');
// /////////////////////////
const port = process.env.PORT || PORT;
const app = new Koa();
// const router = new Router();
const logger = bunyan.createLogger({name: 'app'});

app.context.log = logger;
app.use(koaLogger(logger));
app.use(koaBody());
app.use(userRouter.routes());
app.use(async (ctx, next) => {
    await next();
});
app.use(userRouter.allowedMethods());
app.use(serve('public'));

app.listen(port, () => {
    logger.info(`Server is started on ${port} port`);
});
