'use strict'

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('buys', [
            {
                user: 'john',
                productId: 'p0009',
                info: 'カズノコ',
                price: '1000',
                imgUrl: 'https://thumb.photo-ac.com/41/415e52c6cce5a24d924832074ab55d31_t.jpeg',
                createdAt: '2020-07-01 07:00:00',
                updatedAt: '2020-07-01 07:00:00',
            },
            {
                user: 'jane',
                productId: 'p0011',
                info: 'モナカ',
                price: '300',
                imgUrl: 'https://thumb.photo-ac.com/95/95085fe3e41369daa5898cfcbeb7b553_t.jpeg',
                createdAt: '2020-07-01 07:00:00',
                updatedAt: '2020-07-01 07:00:00',
            },
            {
                user: 'boss',
                productId: 'p0016',
                info: 'バターサンド',
                price: '500',
                imgUrl: 'https://thumb.photo-ac.com/a0/a071278380ee521510bec3c2c6fa3e07_t.jpeg',
                createdAt: '2020-07-01 07:00:00',
                updatedAt: '2020-07-01 07:00:00',
            },
        ])
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('buys', null, {})
    },
}
