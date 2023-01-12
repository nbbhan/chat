'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('products', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
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
                type: Sequelize.FLOAT(5),
            },
            rating: {
                allowNull: false,
                type: Sequelize.FLOAT,
            },
            imgUrl: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            dealerId: {
                allowNull: false,
                type: Sequelize.STRING(5),
            },
            area: {
                type: Sequelize.STRING,
            },
            prefecture: {
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
        await queryInterface.dropTable('products')
    },
}
