const Sequelize = require('sequelize');
const {db} = require('../cfg/config');

const sequelize = new Sequelize(db.name, db.username, db.password, {
    host: db.host,
    port: db.port,
    dialect: db.dialect,
});

const User = require('./user')(sequelize);
const Item = require('./item')(sequelize);
const ListedItem = require('./listedItem')(sequelize);
const Category = require('./category')(sequelize);
const TradeOffer = require('./tradeOffer')(sequelize);

const models = {
    [User.name]: User,
    [Item.name]: Item,
    [Category.name]: Category,
    [ListedItem.name]: ListedItem,
    [TradeOffer.name]: TradeOffer
};

Object.keys(models).forEach((modelName) => {
    if (models[modelName].associate) {
        models[modelName].associate(models);
    }
});

module.exports = {
    sequelize,
    ...models
};