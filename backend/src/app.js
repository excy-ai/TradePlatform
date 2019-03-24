'use strict';

const Koa = require('koa');
const path = require('path');
const serve = require('koa-static');
const koaBody = require('koa-bodyparser');
const SequelizeSessionStore = require('koa-generic-session-sequelize');
const session = require('koa-generic-session');
const koaLogger = require('koa-bunyan');
const send = require('koa-send');
const bunyan = require('bunyan');
const router = require('./routes');
const {sequelize} = require('./models');
const passport = require('./controllers/Auth').passport;
const app = new Koa();
const logger = bunyan.createLogger({name: 'app'});
app.context.log = logger;
app.use(koaLogger(logger));
app.use(serve('public'));
app.use(koaBody());
app.keys = ['secret'];
module.exports = sequelize.sync({force: true}).then(async () => {
    app.use(session({
        "key": "itemtradenet:sess",
        "renew": true,
        "maxAge": 864000000,
        "resave": true,
        "saveUninitializes": true,
        store: new SequelizeSessionStore(
            sequelize, {
                tableName: 'sessions',
            },
        )
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(router.routes());
    app.use(router.allowedMethods());
    app.use(async (ctx) => {
        console.log(ctx.request.path);
        if (!ctx.request.path.startsWith('/api/')) {
            const _path = path.resolve('public');
            console.log(_path);
            await send(ctx, 'index.html', {root: _path});
        }
    });
    return app;
});
