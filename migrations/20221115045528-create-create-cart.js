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
            quantity: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
        })
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('carts')
    },
}
