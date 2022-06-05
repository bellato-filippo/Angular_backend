const Sequelize = require('sequelize');
const db = require('../database');
const Has = require('./has');
const Plate = require('./plate');

const Ingredient = db.define('ingredient', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    expirydate: {
        type: Sequelize.DATE
    },
},
{
    timestamps: false,
    freezeTableName: true
});

module.exports = Ingredient;