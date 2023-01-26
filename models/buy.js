'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Buy extends Model {
        static associate(models) {}
    }
    Buy.init(
        {
            user: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            productId: {
                type: DataTypes.STRING(20),
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

            imgUrl: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: 'Buy',
            tableName: 'buys',
        },
    )
    return Buy
}
