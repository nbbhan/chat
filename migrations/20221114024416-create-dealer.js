'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('dealers', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            dealerId: {
                allowNull: false,
                type: Sequelize.STRING(5),
            },
            account: {
                allowNull: false,
                type: Sequelize.STRING(20),
            },
            username: {
                allowNull: false,
                type: Sequelize.STRING(20),
            },
            email: {
                allowNull: false,
                type: Sequelize.STRING(100),
            },
            password: {
                allowNull: false,
                type: Sequelize.STRING(20),
            },
            imgUrl: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            info: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            intro: {
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
        await queryInterface.dropTable('dealers')
    },
}
