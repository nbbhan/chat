'use strict'

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('carts', [
            {
                addtocartId: 'a0001',
                userId: 'u0001',
                productId: 'p0001',
                quantity: '1',
                createdAt: '2020-07-01 07:00:00',
                updatedAt: '2020-07-01 07:00:00',
            },
        ])
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('carts', null, {})
    },
}

// {
//   addtocartId: "a0001",
//   userId: "u0001",
//   productId: "p0001",
//   quantity: ""
// },
