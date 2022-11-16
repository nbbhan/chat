'use strict'

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('points', [
            {
                userId: 'u0001',
                point: '1000',
                token: '',
                grantedAt: '2020-07-01 07:00:00',
                usedAt: '2020-07-01 07:00:00',
                createdAt: '2020-07-01 07:00:00',
                updatedAt: '2020-07-01 07:00:00',
            },
        ])
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('points', null, {})
    },
}

// {
//   userId: "u0001",
//   point: "",
//   token: "",
//   grantedAt: "",
//   usedAt: ""
// },
