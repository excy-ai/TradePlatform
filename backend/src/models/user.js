"use strict";
const uuid = require("uuid/v4");
const Sequelize = require("sequelize");

module.exports = sequelize => {
  const User = sequelize.define(
    "User",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: () => uuid(),
        unique: true,
        validate: {
          notEmpty: true
        }
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      }
    },
    {
      underscored: true,
      tableName: "users"
    }
  );

  User.associate = models => {
    User.hasMany(models.Item, {
      onDelete: "cascade"
    });
    User.hasMany(models.TradeOffer, {
      onDelete: "cascade"
    });
  };

  return User;
};
