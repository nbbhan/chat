'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('watches', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            watchId: {
                allowNull: false,
                type: Sequelize.STRING(20),
            },
            userId: {
                allowNull: false,
                type: Sequelize.STRING(5),
            },
            productId: {
                allowNull: false,
                type: Sequelize.STRING(5),
            },
            watchedAt: {
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
        await queryInterface.dropTable('watches')
    },
}
