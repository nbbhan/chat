'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Cart extends Model {
        static associate(models) {}
    }
    Cart.init(
        {
            addtocartId: {
                type: DataTypes.STRING(5),
                allowNull: false,
            },
            userId: {
                type: DataTypes.STRING(5),
                allowNull: false,
            },
            productId: {
                type: DataTypes.STRING(5),
                allowNull: false,
            },
            quantity: {
                type: DataTypes.FLOAT(3),
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: 'Cart',
            tableName: 'carts',
        },
    )
    return Cart
}
