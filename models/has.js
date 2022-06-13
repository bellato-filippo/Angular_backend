const Sequelize = require('sequelize');
const db = require('../database');

//creates the has table. SPecifies the foreign key
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