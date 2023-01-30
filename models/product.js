'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        static associate(models) {}
    }
    Product.init(
        {
            productId: {
                type: DataTypes.STRING(5),
                allowNull: false,
            },
            info: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            price: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            rating: {
                type: DataTypes.FLOAT,
            },
            imgUrl: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            dealerId: {
                type: DataTypes.STRING(5),
            },
            area: DataTypes.STRING,
            prefecture: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'Product',
            tableName: 'products',
        },
    )
    return Product
}
