'use strict'
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            username: {
                type: Sequelize.STRING(20),
                allowNull: false,
                unique: true,
            },
            email: {
                type: Sequelize.STRING(100),
                allowNull: false,
                unique: true,
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            imageUrl: Sequelize.STRING,
            buyPoint: Sequelize.FLOAT,
            getPoint: Sequelize.FLOAT,
            follow: Sequelize.FLOAT,
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            address: {
                type: Sequelize.STRING,
            },
            profileName: {
                type: Sequelize.STRING(20),
            },
        })
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('users')
    },
}
