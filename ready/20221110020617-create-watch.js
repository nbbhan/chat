'use strict'

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('watch', [
            {
                watchId: 'w0001',
                userId: 'u0001',
                productId: 'p0001',
                watchedAt: '',
            },
        ])
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('watch', null, {})
    },
}

// {
//   watchId: "w0001",
//   userId: "u0001",
//   productId: "p0001",
//   watchedAt:""
// },
