'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Point extends Model {
        static associate(models) {}
    }
    Point.init(
        {
            userId: {
                type: DataTypes.STRING(5),
                allowNull: false,
            },
            point: {
                type: DataTypes.FLOAT(5),
                allowNull: false,
            },
            token: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            grantedAt: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            usedAt: {
                type: DataTypes.DATE,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: 'Point',
            tableName: 'points',
        },
    )
    return Point
}
