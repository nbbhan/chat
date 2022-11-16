'use strict'

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('watches', [
            {
                watchId: 'w0001',
                userId: 'u0001',
                productId: 'p0001',
                watchedAt: '2020-07-01 07:00:00',
                createdAt: '2020-07-01 07:00:00',
                updatedAt: '2020-07-01 07:00:00',
            },
        ])
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('watches', null, {})
    },
}

// {
//   watchId: "w0001",
//   userId: "u0001",
//   productId: "p0001",
//   watchedAt:""
// },
