'use strict';

const Router = require('koa-router');
const { authCheck } = require('../middlewares/authCheck');
const OfferController = require('../controllers/offer/offerController');

module.exports = new Router()
  .post('/create', authCheck, OfferController.create)
  .get('/sended', authCheck, OfferController.getSended)
  .get('/targeted', authCheck, OfferController.getTargeted);