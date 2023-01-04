'use strict'
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('favorites', [
            {
                productId: 'p0003',
                user: 'boss',
                createdAt: '2020-07-01 07:00:00',
                updatedAt: '2020-07-01 07:00:00',
            },
            {
                productId: 'p0008',
                user: 'jane',
                createdAt: '2020-07-01 07:00:00',
                updatedAt: '2020-07-01 07:00:00',
            },
            {
                productId: 'p0015',
                user: 'john',
                createdAt: '2020-07-01 07:00:00',
                updatedAt: '2020-07-01 07:00:00',
            },
        ])
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('favorites', null, {})
    },
}
