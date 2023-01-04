'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Favorite extends Model {
        static associate(models) {}
    }
    Favorite.init(
        {
            user: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            productId: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: 'Favorite',
            tableName: 'favorites',
        },
    )
    return Favorite
}
