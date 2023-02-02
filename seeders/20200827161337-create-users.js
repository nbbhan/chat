'use strict'
const bcrypt = require('bcryptjs')

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const password = await bcrypt.hash('123456', 6)
        const createdAt = new Date()
        const updatedAt = createdAt

        await queryInterface.bulkInsert('users', [
            {
                username: 'QOKS',
                email: 'qoks@email.com',
                password: await bcrypt.hash('qoks', 6),
                imageUrl:
                    'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
                buyPoint: 0,
                getPoint: 0,
                follow: 0,
                createdAt,
                updatedAt,
            },
            {
                username: 'admin',
                email: 'admin@email.com',
                password: await bcrypt.hash('admin', 6),
                imageUrl:
                    'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
                buyPoint: 0,
                getPoint: 0,
                follow: 0,
                createdAt,
                updatedAt,
            },
            {
                username: 'hokkaido_ryoushi',
                email: 'hokkaido_ryoushi@email.com',
                password: password,
                imageUrl:
                    'https://images.unsplash.com/photo-1590133604435-b3c70cb2de90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
                buyPoint: 7000,
                getPoint: 500,
                follow: 5,
                createdAt,
                updatedAt,
            },
            {
                username: 'ohara',
                email: 'ohara@email.com',
                password: password,
                imageUrl:
                    'https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2122&q=80',
                buyPoint: 5000,
                getPoint: 1996,
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
