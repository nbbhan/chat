'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {}
    }
    User.init(
        {
            username: {
                type: DataTypes.STRING(20),
                allowNull: false,
                unique: true,
            },
            email: {
                type: DataTypes.STRING(100),
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: {
                        args: true,
                        msg: '使用可能なメールアドレスでなければなりません',
                    },
                },
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            imageUrl: DataTypes.STRING,
            buyPoint: DataTypes.FLOAT,
            getPoint: DataTypes.FLOAT,
            follow: DataTypes.FLOAT,
        },
        {
            sequelize,
            modelName: 'User',
            tableName: 'users',
        },
    )

    return User
}
