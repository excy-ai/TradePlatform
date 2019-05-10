const { sequelize } = require('../../models/index');

module.exports = () => {
  sequelize.query('delete from `users`');
  sequelize.query('delete from `items`');
  sequelize.query('delete from `offers`');
  sequelize.query('delete from `listed`');
};