'use strict'

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('cart', [
            {
                addtocartId: 'a0001',
                userId: 'u0001',
                productId: 'p0001',
                quantity: '',
            },
        ])
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('cart', null, {})
    },
}

// {
//   addtocartId: "a0001",
//   userId: "u0001",
//   productId: "p0001",
//   quantity: ""
// },
