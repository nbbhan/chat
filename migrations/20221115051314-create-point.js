'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('points', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            userId: {
                allowNull: false,
                type: Sequelize.STRING(5),
            },
            point: {
                allowNull: false,
                type: Sequelize.FLOAT(5),
            },
            token: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            grantedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            usedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        })
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('points')
    },
}
