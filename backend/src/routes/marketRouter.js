'use strict';

const Router = require('koa-router');
const {authCheck} = require('../middlewares/authCheck');
const marketController = require('../controllers/marketController');


module.exports = new Router()
    .get('/search', marketController.getAllOnTrade);