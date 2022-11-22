'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Popular extends Model {
        static associate(models) {}
    }
    Popular.init(
        {
            productId: {
                type: DataTypes.STRING(20),
                allowNull: false,
            },
            info: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            price: {
                type: DataTypes.FLOAT(5),
                allowNull: false,
            },
            rating: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
            imgUrl: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            dealerId: {
                type: DataTypes.STRING(5),
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: 'Popular',
            tableName: 'populars',
        },
    )
    return Popular
}
