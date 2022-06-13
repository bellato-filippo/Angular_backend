const Sequelize = require('sequelize');

//connects to the database with sequelize
module.exports = new Sequelize('restaurant', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres',

    //connection pool. Max 5 connections
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});