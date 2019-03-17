'use strict';
const PORT = 3000;
const Koa = require('koa');
const serve = require('koa-static');
const koaBody = require('koa-bodyparser');
const router = require('./routes');
const {sequelize, User, Inventory, Item} = require('./models');
const bunyan = require('bunyan');
const koaLogger = require('koa-bunyan');
const session = require('koa-generic-session');
const SequelizeSessionStore = require('koa-generic-session-sequelize');
const passport = require('./controllers/Auth').passport;
////////////////////////////
const port = process.env.PORT || PORT;
const app = new Koa();
const logger = bunyan.createLogger({name: 'app'});
////////////////////////////
app.context.log = logger;
app.use(koaLogger(logger));
app.use(serve('public'));
// body parser
app.use(koaBody());
app.keys = ['secret'];
sequelize.sync({force: true}).then(async () => {

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

    app.listen(port, () => {
        console.log(`Server is started on ${port} port`);
    });
});