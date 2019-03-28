'use strict';

// const fs = require('fs');
// const categoryList = fs.readFileSync('../cfg/CategoryList.json', 'utf8');
const {Category} = require('../models');

// let categorys = JSON.parse(categoryList).data;

let categorys = [
    "common",
    "uncommon",
    "rare",
    "mythical",
    "legendary",
    "immortal"
];

async function insertCategorys() {
    await categorys.map((category) => {
        Category.create({title: category});
    });
}

module.exports = {insertCategorys};