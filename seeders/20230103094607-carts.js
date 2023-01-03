'use strict'
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('carts', [
            {
                productId: 'p0001',
                user: 'john',
                createdAt: '2020-07-01 07:00:00',
                updatedAt: '2020-07-01 07:00:00',
            },
            {
                productId: 'p0001',
                user: 'jane',
                createdAt: '2020-07-01 07:00:00',
                updatedAt: '2020-07-01 07:00:00',
            },
            {
                productId: 'p0020',
                user: 'john',
                createdAt: '2020-07-01 07:00:00',
                updatedAt: '2020-07-01 07:00:00',
            },
        ])
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('carts', null, {})
    },
}
