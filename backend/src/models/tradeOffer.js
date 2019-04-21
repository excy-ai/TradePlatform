"use strict";
const uuid = require("uuid/v4");
const Sequelize = require("sequelize");

module.exports = sequelize => {
  const TradeOffer = sequelize.define(
    "TradeOffer",
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
      status: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      target: {
        type: Sequelize.UUID,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      targetItem: {
        type: Sequelize.UUID,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      offeredItem: {
        type: Sequelize.UUID,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      }
    },
    {
      underscored: true,
      tableName: "offers"
    }
  );

  TradeOffer.associate = models => {
    TradeOffer.belongsTo(models.User, {
      onDelete: "cascade"
    });
  };
  return TradeOffer;
};
