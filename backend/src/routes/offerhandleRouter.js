'use strict';

const Router = require('koa-router');
const OfferController = require('../controllers/offer/offerController');

module.exports = new Router()
  .post('/accept', OfferController.acceptOffer)
  .update('/reject', OfferController.rejectOffer)
  .delete('/cancel', OfferController.cancelOffer);