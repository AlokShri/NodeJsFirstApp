const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const Employer =  sequelize.define('employer',{

    id: {
        type: Sequelize.INTEGER,
        autoIncrementel: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: true
    },
    address1: {
        type: Sequelize.STRING,
        allowNull: true
    },
    address2: {
        type: Sequelize.STRING,
        allowNull: true
    },
    address3: {
        type: Sequelize.STRING,
        allowNull: true
    },
    city: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    state: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    pin: {
        type: Sequelize.STRING,
        allowNull: true,
    },

 
})

module.exports =  Employer;