'use strict';
const uuid = require('uuid/v4');
const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    const Item = sequelize.define('Item', {
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
            sign: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            description: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            category: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            pic: {
                type: Sequelize.BLOB,
                allowNull: true
            },
            onTrade: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
                allowNull: false
            }
        },
        {
            underscored: true,
            tableName: 'items'
        });

    Item.associate = (models) => {
        Item.belongsTo(models.Inventory, {
            onDelete: 'set null'
        });
        Item.belongsTo(models.Category, {
            onDelete: 'set null'
        })
    };
    return Item;
};