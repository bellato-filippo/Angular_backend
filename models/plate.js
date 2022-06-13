const Sequelize = require('sequelize');
const db = require('../database');
const Has = require('./has');
const Ingredient = require('./ingredient');

//creates the plate table
const Plate = db.define('plate', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.REAL
    },
},
{
    timestamps: false,
    freezeTableName: true
});

module.exports = Plate;