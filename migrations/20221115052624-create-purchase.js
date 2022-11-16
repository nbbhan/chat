'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('purchases', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            historyId: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            userId: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            productId: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            purchasedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            returnedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            quantity: {
                allowNull: false,
                type: Sequelize.FLOAT,
            },
            returnedQuantity: {
                allowNull: false,
                type: Sequelize.FLOAT,
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
        await queryInterface.dropTable('purchases')
    },
}
