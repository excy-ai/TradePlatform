'use strict';
const uuid = require('uuid/v4');
const Sequelize = require('sequelize');

module.exports = sequelize => {
  const Category = sequelize.define(
    'Category',
    {
      title: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true,
        validate: {
          notEmpty: true,
        },
      },
      uniqueness: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      underscored: true,
      tableName: 'category',
    },
  );

  Category.associate = models => {
    Category.hasMany(models.Item, {
      onDelete: 'cascade',
    });
  };

  return Category;
};
