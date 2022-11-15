'use strict'

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('point', [
            {
                userId: 'u0001',
                point: '',
                token: '',
                grantedAt: '',
                usedAt: '',
            },
        ])
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('point', null, {})
    },
}

// {
//   userId: "u0001",
//   point: "",
//   token: "",
//   grantedAt: "",
//   usedAt: ""
// },
