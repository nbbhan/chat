'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('carts', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            addtocartId: {
                allowNull: false,
                type: Sequelize.STRING(5),
            },
            userId: {
                allowNull: false,
                type: Sequelize.STRING(5),
            },
            productId: {
                allowNull: false,
                type: Sequelize.STRING(5),
            },
            quantity: {
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
        await queryInterface.dropTable('carts')
    },
}
