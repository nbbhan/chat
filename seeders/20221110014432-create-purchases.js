'use strict'

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('purchases', [
            {
                historyId: 'h0001',
                userId: 'u0001',
                productId: 'p0001',
                purchasedAt: '2020-07-01 07:00:00',
                returnedAt: '2020-07-01 07:00:00',
                quantity: '1',
                returnedQuantity: '1',
                createdAt: '2020-07-01 07:00:00',
                updatedAt: '2020-07-01 07:00:00',
            },
        ])
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('purchases', null, {})
    },
}

// {
//   historyId: 'h0001',
//   userId: 'u0001',
//   productId: 'p0001',
//   purchasedAt: '',
//   returnedAt: '',
//   quantity: '',
//   returnedQuantity: '',
// },
