const Sequelize = require('sequelize');
const db = require('../database');

const Has = db.define('has', {
    plate: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: 'plate',
        referencesKey: 'id'
    },
    ingredient: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: 'ingredient',
        referencesKey: 'id'
    },
},
{
    timestamps: false,
    tableName: "has"
});

module.exports = Has;