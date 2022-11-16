'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Purchase extends Model {
        static associate(models) {}
    }
    Purchase.init(
        {
            historyId: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            userId: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            productId: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            purchasedAt: {
                allowNull: false,
                type: DataTypes.DATE,
            },
            returnedAt: {
                allowNull: false,
                type: DataTypes.DATE,
            },
            quantity: {
                allowNull: false,
                type: DataTypes.FLOAT,
            },
            returnedQuantity: {
                allowNull: false,
                type: DataTypes.FLOAT,
            },
        },
        {
            sequelize,
            modelName: 'Purchase',
            tableName: 'purchases',
        },
    )
    return Purchase
}
