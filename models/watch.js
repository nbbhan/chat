'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Watch extends Model {
        static associate(models) {}
    }
    Watch.init(
        {
            watchId: {
                type: DataTypes.STRING(20),
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
            watchedAt: {
                type: DataTypes.DATE,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: 'Watch',
            tableName: 'watches',
        },
    )
    return Watch
}
