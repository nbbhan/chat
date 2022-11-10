'use strict'

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('purchase', [
            {
                dealerId: 'd0001',
                userId: 'u0001',
                productId: 'p0001',
                purchasedAt: '',
                returnedAt: '',
                quantity: '',
                returnedQuantity: '',
            },
        ])
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('purchase', null, {})
    },
}

// {
//   dealerId: 'd0001',
//   userId: 'u0001',
//   productId: 'p0001',
//   purchasedAt: '',
//   returnedAt: '',
//   quantity: '',
//   returnedQuantity: '',
// },
