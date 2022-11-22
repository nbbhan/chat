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
                type: Sequelize.STRING(20),
            },
            userId: {
                allowNull: false,
                type: Sequelize.STRING(5),
            },
            productId: {
                allowNull: false,
                type: Sequelize.STRING(20),
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
                type: Sequelize.FLOAT(3),
            },
            returnedQuantity: {
                allowNull: false,
                type: Sequelize.FLOAT(3),
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
