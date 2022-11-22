'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Message extends Model {
        static associate(models) {}
    }
    Message.init(
        {
            content: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            uuid: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
            },
            from: {
                type: DataTypes.STRING(20),
                allowNull: false,
            },
            to: {
                type: DataTypes.STRING(20),
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: 'Message',
            tableName: 'messages',
        },
    )
    return Message
}
