'use strict';

const Router = require('koa-router');
const OfferController = require('../controllers/offer/offerController');

module.exports = new Router()
  .patch('/accept', OfferController.acceptOffer)
  .patch('/reject', OfferController.rejectOffer)
  .delete('/cancel', OfferController.cancelOffer);