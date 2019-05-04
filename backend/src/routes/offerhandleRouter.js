'use strict';

const Router = require('koa-router');
const OfferController = require('../controllers/offer/offerController');
const { authCheck } = require('../middlewares/authCheck');

module.exports = new Router()
  .patch('/accept', authCheck, OfferController.acceptOffer)
  .patch('/reject', authCheck, OfferController.rejectOffer)
  .del('/cancel', authCheck, OfferController.cancelOffer)
  .get('/info', authCheck, OfferController.getOfferItems);