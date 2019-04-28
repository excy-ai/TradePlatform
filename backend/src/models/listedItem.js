'use strict';
const Sequelize = require('sequelize');

module.exports = sequelize => {
  const ListedItem = sequelize.define(
    'ListedItem',
    {
      sign: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true,
        },
      },
      category: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      }
    },
    {
      underscored: true,
      tableName: 'listed',
    },
  );

  return ListedItem;
};
