'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        static associate(models) {}
    }
    Product.init(
        {
            productId: {
                type: DataTypes.STRING(20),
                allowNull: false,
            },
            info: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            dealerId: {
                type: DataTypes.STRING(5),
                allowNull: false,
            },
            price: {
                type: DataTypes.FLOAT(5),
                allowNull: false,
            },
            imgUrl: {
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
            modelName: 'Product',
            tableName: 'products',
        },
    )
    return Product
}
