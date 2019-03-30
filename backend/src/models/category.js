'use strict';
const uuid = require('uuid/v4');
const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    const Category = sequelize.define('Category', {
            title: {
                allowNull: false,
                unique: true,
                type: Sequelize.STRING,
                primaryKey: true,
                validate: {
                    notEmpty: true
                }
            }
        },
        {
            underscored: true,
            tableName: 'category'
        });

    Category.associate = (models) => {
        Category.hasMany(models.Item, {
            onDelete: 'cascade'
        });
    };

    return Category;
};