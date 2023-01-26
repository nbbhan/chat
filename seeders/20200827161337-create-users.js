'use strict'
const password = await bcrypt.hash('123456', 6)
const bcrypt = require('bcryptjs')

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const createdAt = new Date()
        const updatedAt = createdAt

        await queryInterface.bulkInsert('users', [
            {
                username: 'qoks',
                email: 'qoks@email.com',
                password: await bcrypt.hash('qoks', 6),
                imageUrl:
                    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1700&q=80',
                buyPoint: 5000,
                getPoint: 1996,
                follow: 5,
                createdAt,
                updatedAt,
            },
            {
                username: 'admin',
                email: 'admin@email.com',
                password: await bcrypt.hash('admin', 6),
                imageUrl:
                    'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2190&q=80',
                buyPoint: 2000,
                getPoint: 1926,
                follow: 5,
                createdAt,
                updatedAt,
            },
            {
                username: 'hokkaido_ryoushi',
                email: 'hokkaido_ryoushi@email.com',
                password: password,
                imageUrl:
                    'https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2122&q=80',
                buyPoint: 7000,
                getPoint: 500,
                follow: 5,
                createdAt,
                updatedAt,
            },
        ])
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('users', null, {})
    },
}
