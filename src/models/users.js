const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

const User = sequelize.define('User', {
    // Model attributes are defined here
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },

    nickname: {
        type: DataTypes.STRING,
        allowNull: false
    },

    studentid: {
        type: DataTypes.INT,
        allowNull: false
    },

    department: {
        type: DataTypes.STRING,
        allowNull: false
    },


    age: {
        type: DataTypes.INT,
        allowNull: false
    },


    smoke: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },

    
    snoring: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },

    bruxism: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },


    detail: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
}, {
    // Other model options go here
});

module.exports = User;
