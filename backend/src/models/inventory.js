'use strict';
const uuid = require('uuid/v4');
const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    const Inventory = sequelize.define('Inventory', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: () => uuid(),
                unique: true,
                validate: {
                    notEmpty: true
                }
            }
        },
        {
            underscored: true,
            tableName: 'inventory'
        });

    Inventory.associate = (models) => {
        Inventory.hasMany(models.Item, {
            onDelete: 'cascade'
        });
        Inventory.belongsTo(models.User, {
            onDelete: 'cascade'
        });
    };

    return Inventory;
};