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
                type: DataTypes.STRING(20),
            },
            userId: {
                allowNull: false,
                type: DataTypes.STRING(5),
            },
            productId: {
                allowNull: false,
                type: DataTypes.STRING(20),
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
                type: DataTypes.FLOAT(3),
            },
            returnedQuantity: {
                allowNull: false,
                type: DataTypes.FLOAT(3),
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
