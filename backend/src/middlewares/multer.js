'use strict';
const multer = require('koa-multer');
let multipartUpload = multer({
  storage: multer.diskStorage({
    destination: function(req, file, callback) {
      callback(null, './public/images/');
    },
    filename: function(req, file, callback) {
      callback(null, 'img-' + Date.now() + '-' + file.originalname);
    },
  }),
}).single('image');

module.exports = multipartUpload;