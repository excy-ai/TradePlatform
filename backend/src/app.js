'use strict';
const PORT = 3000;
const Koa = require('koa');
const serve = require('koa-static');
const koaBody = require('koa-body');
const Router = require('koa-router');
const bunyan = require('bunyan');
const koaLogger = require('koa-bunyan');
const uuid = require('uuid/v4');
///////////////////////////
const Item = require('./models/Item');
const User = require('./models/User');
const Inventory = require('./models/Inventory');

///////////////////////////

const port = process.env.PORT || PORT;
const app = new Koa();
const router = new Router();
const logger = bunyan.createLogger({name: 'app'});
app.context.log = logger;

app.use(koaLogger(logger));
app.use(koaBody());

app.use(async (ctx, next) => {
    let user = new User(ctx.request.body);//{firstName:"deda", lastName:"doeda",password:"DedDoedDaDa",email:"deddoed@gmail.com"}
    let inv = new Inventory({userId: `${user.id}`, inventoryId: `${user.inventoryId}`});
    let item = new Item(Object.assign({},
        {
            "name": "Item",
            "description": "item description",
            "category": "none",
            "pic": "pic"
        }, {"masterId": user.id}));
    inv.addItem(item);
    console.log(inv);
    ctx.response.status = 200;
    ctx.response.body = Object.assign({}, inv, user);

    await next();
});

app.use(serve('public'));

app.listen(port, () => {
    logger.info(`Server is started on ${port} port`);
});
