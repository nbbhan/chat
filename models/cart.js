'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Cart extends Model {
        static associate(models) {}
    }
    Cart.init(
        {
            user: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            productId: {
                type: DataTypes.STRING,
                allowNull: true,
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
