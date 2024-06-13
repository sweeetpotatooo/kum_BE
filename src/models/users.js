const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config(); // 환경 변수를 로드합니다.

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
});

const User = sequelize.define('User', {
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
        type: DataTypes.INTEGER,
        allowNull: false
    },
    department: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
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
    }
}, {
    // 기타 모델 옵션을 여기에 추가할 수 있습니다.
});

module.exports = User;
