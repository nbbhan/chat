'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('buys', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            user: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            productId: {
                allowNull: false,
                type: Sequelize.STRING(20),
            },
            info: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            price: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            imgUrl: {
                allowNull: false,
                type: Sequelize.STRING,
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
        await queryInterface.dropTable('buys')
    },
}
