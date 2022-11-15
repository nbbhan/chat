'use strict'

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('populars', [
            {
                productId: 'p0001',
                info: 'お茶',
                price: '100',
                rating: '3.5',
                imgUrl: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                dealerId: '',
                createdAt: '2020-07-01 07:00:00',
                updatedAt: '2020-07-01 07:00:00',
            },
            {
                productId: 'p0002',
                info: '琥珀糖',
                price: '600',
                rating: '4',
                imgUrl: 'https://images.unsplash.com/photo-1559765801-d0dbdb3b2366?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8JUU3JTkwJUE1JUU3JThGJTgwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                dealerId: '',
                createdAt: '2020-07-01 07:00:00',
                updatedAt: '2020-07-01 07:00:00',
            },
            {
                productId: 'p0003',
                info: 'きりたんぽ',
                price: '600',
                rating: '4.8',
                imgUrl: 'https://images.unsplash.com/photo-1563118946-9d60eae4a82d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8JUU3JTg0JUJDJUUzJTgxJThEJUU5JUIzJUE1fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                dealerId: '',
                createdAt: '2020-07-01 07:00:00',
                updatedAt: '2020-07-01 07:00:00',
            },
            {
                productId: 'p0004',
                info: 'こけし',
                price: '3000',
                rating: '4',
                imgUrl: 'https://images.unsplash.com/photo-1623014373724-3d2113d46209?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8JUUzJTgxJTkzJUUzJTgxJTkxJUUzJTgxJTk3fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                dealerId: '',
                createdAt: '2020-07-01 07:00:00',
                updatedAt: '2020-07-01 07:00:00',
            },
            {
                productId: 'p0005',
                info: 'サーターアンダギー',
                price: '300',
                rating: '2.3',
                imgUrl: 'https://images.unsplash.com/photo-1533417177250-227597f5b264?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fCVFMyU4MyU5MSVFMyU4MyVCM3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60',
                dealerId: '',
                createdAt: '2020-07-01 07:00:00',
                updatedAt: '2020-07-01 07:00:00',
            },
            {
                productId: 'p0006',
                info: 'うどん',
                price: '400',
                rating: '3',
                imgUrl: 'https://images.unsplash.com/photo-1618841557871-b4664fbf0cb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8JUUzJTgxJTg2JUUzJTgxJUE5JUUzJTgyJTkzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                dealerId: '',
                createdAt: '2020-07-01 07:00:00',
                updatedAt: '2020-07-01 07:00:00',
            },
            {
                productId: 'p0007',
                info: 'うなぎの蒲焼き',
                price: '1500',
                rating: '4.4',
                imgUrl: 'https://images.unsplash.com/photo-1559897202-7fc939ce9db2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZWVsfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                dealerId: '',
                createdAt: '2020-07-01 07:00:00',
                updatedAt: '2020-07-01 07:00:00',
            },
            {
                productId: 'p0008',
                info: 'たこ焼き',
                price: '600',
                rating: '2',
                imgUrl: 'https://images.unsplash.com/photo-1652752731860-ef0cf518f13a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8JUUzJTgxJTlGJUUzJTgxJTkzJUU3JTg0JUJDJUUzJTgxJThEfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                dealerId: '',
                createdAt: '2020-07-01 07:00:00',
                updatedAt: '2020-07-01 07:00:00',
            },
            {
                productId: 'p0009',
                info: 'カズノコ',
                price: '1000',
                rating: '4.1',
                imgUrl: 'https://images.unsplash.com/photo-1587203976879-ef56a73ff90b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fCVFMyU4MSVCMCVFMyU4MSVBQSVFMyU4MSVBQXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60',
                dealerId: '',
                createdAt: '2020-07-01 07:00:00',
                updatedAt: '2020-07-01 07:00:00',
            },
            {
                productId: 'p0010',
                info: 'フルーツ大福',
                price: '700',
                rating: '4',
                imgUrl: 'https://images.unsplash.com/photo-1652536942156-457e44f41732?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8JUU1JUE0JUE3JUU3JUE2JThGfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                dealerId: '',
                createdAt: '2020-07-01 07:00:00',
                updatedAt: '2020-07-01 07:00:00',
            },
            {
                productId: 'p0011',
                info: 'モナカ',
                price: '300',
                rating: '3',
                imgUrl: 'https://images.unsplash.com/photo-1626685214164-23330202e175?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fCVFNSU5MiU4QyVFOCU4RiU5MyVFNSVBRCU5MHxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60',
                dealerId: '',
                createdAt: '2020-07-01 07:00:00',
                updatedAt: '2020-07-01 07:00:00',
            },
            {
                productId: 'p0012',
                info: 'カツオのたたき',
                price: '1000',
                rating: '3.7',
                imgUrl: 'https://images.unsplash.com/photo-1530260626688-048279320445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8JUU1JTg4JUJBJUU4JUJBJUFCfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                dealerId: '',
                createdAt: '2020-07-01 07:00:00',
                updatedAt: '2020-07-01 07:00:00',
            },
            {
                productId: 'p0013',
                info: 'わらび餅',
                price: '200',
                rating: '4.7',
                imgUrl: 'https://images.unsplash.com/photo-1644432757699-bb5a01e8fb0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fCVFOCVCMSU4NnxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60',
                dealerId: '',
                createdAt: '2020-07-01 07:00:00',
                updatedAt: '2020-07-01 07:00:00',
            },
            {
                productId: 'p0014',
                info: '手作りシーサー',
                price: '3000',
                rating: '3.9',
                imgUrl: 'https://plus.unsplash.com/premium_photo-1667761256081-ded820d68ef4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8JUU3JThEJTg1JUU1JUFEJTkwfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                dealerId: '',
                createdAt: '2020-07-01 07:00:00',
                updatedAt: '2020-07-01 07:00:00',
            },
            {
                productId: 'p0015',
                info: '手作り饅頭',
                price: '500',
                rating: '2.7',
                imgUrl: 'https://images.unsplash.com/photo-1629984164142-21c2039de926?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8JUU5JUE0JTg1fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                dealerId: '',
                createdAt: '2020-07-01 07:00:00',
                updatedAt: '2020-07-01 07:00:00',
            },
        ])
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('populars', null, {})
    },
}

// {
//   productId: "p00",
//   info: "",
//   price: "00",
//   imgUrl: '',
//   rating: '3',
//   createdAt: '2020-07-01 07:00:00',
//   updatedAt: '2020-07-01 07:00:00',
// },