'use strict';

const path = require('path');
const fs = require('fs');
const categoryList = fs.readFileSync(
  path.resolve(__dirname, '../cfg/CategoryList.json'),
  'utf8',
);
const { Category } = require('../models');

let categorys = JSON.parse(categoryList).data;

async function insertCategorys() {
  await categorys.map(category => {
    Category.create({ title: category });
  });
}

module.exports = { insertCategorys };
