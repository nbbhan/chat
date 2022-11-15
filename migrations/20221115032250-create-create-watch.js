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
            watchedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        })
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('watches')
    },
}
