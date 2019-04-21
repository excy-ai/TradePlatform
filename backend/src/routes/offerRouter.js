"use strict";

const Router = require("koa-router");
const OfferController = require("../controllers/offer/offerController");

module.exports = new Router()
  .post("/create", OfferController.create)
  .get("/sended", OfferController.getSended)
  .get("/targeted", OfferController.getTargeted)
  .post("/accept", OfferController.acceptOffer)
  .post("/reject", OfferController.rejectOffer)
  .post("/cancel", OfferController.cancelOffer);
//change post to patch (reject)
//change post to patch (accept)
//change post to delete (cancel) and still store offer in DB
