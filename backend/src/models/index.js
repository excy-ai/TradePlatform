const Sequelize = require('sequelize');
const {db} = require('../cfg/config');

const sequelize = new Sequelize(db.name, db.username, db.password, {
    host: db.host,
    port: db.port,
    dialect: db.dialect,
});

const User = require('./User')(sequelize);
const Inventory = require('./Inventory')(sequelize);
const Item = require('./Item')(sequelize);
const ListedItem = require('./ListedItem')(sequelize);
const Category = require('./Category')(sequelize);

const models = {
    [User.name]: User,
    [Inventory.name]: Inventory,
    [Item.name]: Item,
    [Category.name]: Category,
    [ListedItem.name]: ListedItem
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