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
                type: Sequelize.STRING,
            },
            userId: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            productId: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            purchasedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            returnedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            quantity: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            returnedQuantity: {
                allowNull: false,
                type: Sequelize.INTEGER,
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
