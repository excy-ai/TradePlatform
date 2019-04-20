'use strict';

const Router = require('koa-router');
const OfferController = require('../controllers/offer/offerController');

module.exports = new Router()
    .post('/create', OfferController.create)
    .get('/sended', OfferController.getSended)
    .get('/targeted', OfferController.getTargeted);