'use strict'
const bcrypt = require('bcryptjs')

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const password = await bcrypt.hash('123456', 6)
        const createdAt = new Date()
        const updatedAt = createdAt

        await queryInterface.bulkInsert('users', [
            {
                userid: 'u0001',
                account: 'ジョン',
                username: 'john',
                email: 'john@email.com',
                password: password,
                imageUrl:
                    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1700&q=80',
                createdAt,
                updatedAt,
            },
            {
                userid: 'u0002',
                account: 'ジェーン',
                username: 'jane',
                email: 'jane@email.com',
                password: password,
                imageUrl:
                    'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2190&q=80',
                createdAt,
                updatedAt,
            },
            {
                userid: 'u0003',
                account: 'ボス',
                username: 'boss',
                email: 'boss@email.com',
                password: password,
                imageUrl:
                    'https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2122&q=80',
                createdAt,
                updatedAt,
            },
            {
                userid: 'u0004',
                account: 'ウィリアム',
                username: 'william',
                email: 'william@email.com',
                password: password,
                imageUrl:
                    'https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2122&q=80',
                createdAt,
                updatedAt,
            },
            {
                userid: 'u0005',
                account: 'キャメロン',
                username: 'cameron',
                email: 'cameron@email.com',
                password: password,
                imageUrl:
                    'https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2122&q=80',
                createdAt,
                updatedAt,
            },
            {
                userid: 'u0006',
                account: 'エマ',
                username: 'emma',
                email: 'emma@email.com',
                password: password,
                imageUrl:
                    'https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2122&q=80',
                createdAt,
                updatedAt,
            },
        ])
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('users', null, {})
    },
}
