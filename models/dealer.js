'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Dealer extends Model {
        static associate(models) {}
    }
    Dealer.init(
        {
            dealerId: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            account: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            username: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            imgUrl: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            info: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            intro: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            createdAt: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            updatedAt: {
                type: DataTypes.DATE,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: 'Dealer',
            tableName: 'dealers',
        },
    )
    return Dealer
}
