'use strict'

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('populars', [
            {
                productId: 'p0001',
                info: 'お茶',
                price: '100',
                rating: '3.5',
                imgUrl: '',
                // imgUrl: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                dealerId: '',
                createdAt: '2020-07-01 07:00:00',
                updatedAt: '2020-07-01 07:00:00',
            },
            {
                productId: 'p0002',
                info: '琥珀糖',
                price: '600',
                rating: '4',
<<<<<<< HEAD
                imgUrl: 'https://images.unsplash.com/photo-1559765801-d0dbdb3b2366?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8JUU3JTkwJUE1JUU3JThGJTgwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
=======
                imgUrl: '',
                // imgUrl: 'https://media.istockphoto.com/id/534565726/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/kohakutou-%E6%97%A5%E6%9C%AC%E3%81%AE%E4%BC%9D%E7%B5%B1%E7%9A%84%E3%81%AA%E5%AF%92%E5%A4%A9%E3%82%B2%E3%83%AB%E3%82%B9%E3%82%A4%E3%83%BC%E3%83%88.jpg?s=612x612&w=0&k=20&c=7l6hrz5UsovPoUue3GwjRHkesAMsXzPthyF_CaFyLJ0=',
>>>>>>> 0b4994fdb7dfe371805846efd1de9643825192d7
                dealerId: '',
                createdAt: '2020-07-01 07:00:00',
                updatedAt: '2020-07-01 07:00:00',
            },
            {
                productId: 'p0003',
                info: 'きりたんぽ',
                price: '600',
                rating: '4.8',
<<<<<<< HEAD
                imgUrl: 'https://images.unsplash.com/photo-1563118946-9d60eae4a82d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8JUU3JTg0JUJDJUUzJTgxJThEJUU5JUIzJUE1fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
=======
                imgUrl: '',
                // imgUrl: 'https://media.istockphoto.com/id/1279510759/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E6%A1%90%E5%B1%B1%E3%81%BD%E7%A7%8B%E7%94%B0%E9%A2%A8%E9%A4%85.jpg?s=612x612&w=0&k=20&c=5EGUJ1QMEKGlQ8iA94jFKEHb38bkoKGXuF669UEPfCQ=',
>>>>>>> 0b4994fdb7dfe371805846efd1de9643825192d7
                dealerId: '',
                createdAt: '2020-07-01 07:00:00',
                updatedAt: '2020-07-01 07:00:00',
            },
            {
                productId: 'p0004',
                info: 'こけし',
                price: '3000',
                rating: '4',
<<<<<<< HEAD
                imgUrl: 'https://images.unsplash.com/photo-1623014373724-3d2113d46209?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8JUUzJTgxJTkzJUUzJTgxJTkxJUUzJTgxJTk3fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
=======
                imgUrl: '',
                // imgUrl: 'https://media.istockphoto.com/id/958132526/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E4%BC%9D%E7%B5%B1%E7%9A%84%E3%81%AA%E6%97%A5%E6%9C%AC%E3%81%AE%E3%81%93%E3%81%91%E3%81%97.jpg?s=612x612&w=0&k=20&c=SiOxRDDo2Xsqxbv_xTjmnl6hufZ1vQrkw98-HfcwNzs=',
>>>>>>> 0b4994fdb7dfe371805846efd1de9643825192d7
                dealerId: '',
                createdAt: '2020-07-01 07:00:00',
                updatedAt: '2020-07-01 07:00:00',
            },
            {
                productId: 'p0005',
                info: 'サーターアンダギー',
                price: '300',
                rating: '2.3',
<<<<<<< HEAD
                imgUrl: 'https://images.unsplash.com/photo-1533417177250-227597f5b264?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fCVFMyU4MyU5MSVFMyU4MyVCM3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60',
=======
                imgUrl: '',
                // imgUrl: 'https://media.istockphoto.com/id/1301392201/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E3%81%95%E3%81%95%E3%81%9F%E3%81%AE%E3%82%AF%E3%83%AD%E3%83%BC%E3%82%BA%E3%82%A2%E3%83%83%E3%83%97%E6%B2%96%E7%B8%84%E3%81%AE%E5%92%8C%E8%8F%93%E5%AD%90%E3%81%AE%E4%BC%9D%E7%B5%B1%E7%9A%84%E3%81%AA%E6%8F%9A%E3%81%92%E7%89%A9.jpg?s=612x612&w=0&k=20&c=SGZtplXw53Lm9yeEeFuItEkdGWgRP2V7s4hw3jglra4=',
>>>>>>> 0b4994fdb7dfe371805846efd1de9643825192d7
                dealerId: '',
                createdAt: '2020-07-01 07:00:00',
                updatedAt: '2020-07-01 07:00:00',
            },
            {
                productId: 'p0006',
                info: 'うどん',
                price: '400',
                rating: '3',
<<<<<<< HEAD
                imgUrl: 'https://images.unsplash.com/photo-1618841557871-b4664fbf0cb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8JUUzJTgxJTg2JUUzJTgxJUE5JUUzJTgyJTkzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
=======
                imgUrl: '',
                // imgUrl: 'https://media.istockphoto.com/id/1272502626/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E9%8E%8C%E7%8E%89%E3%81%86%E3%81%A9%E3%82%93.jpg?s=612x612&w=0&k=20&c=MxFcNjVBBAZAV54ySsNi3LZrJUOYKTwWx-R-N9x9UmQ=',
>>>>>>> 0b4994fdb7dfe371805846efd1de9643825192d7
                dealerId: '',
                createdAt: '2020-07-01 07:00:00',
                updatedAt: '2020-07-01 07:00:00',
            },
            {
                productId: 'p0007',
                info: 'うなぎの蒲焼き',
                price: '1500',
                rating: '4.4',
<<<<<<< HEAD
                imgUrl: 'https://images.unsplash.com/photo-1559897202-7fc939ce9db2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZWVsfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
=======
                imgUrl: '',
                // imgUrl: 'https://media.istockphoto.com/id/1316826494/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E3%81%86%E3%81%AA%E3%81%8E%E3%81%AE%E3%82%AB%E3%83%90%E7%84%BC%E3%81%8D.jpg?s=612x612&w=0&k=20&c=aa8Fd4BzWhM6oMC8FA5ZvXMwkCOFRLNeXukoAMIrgQ4=',
>>>>>>> 0b4994fdb7dfe371805846efd1de9643825192d7
                dealerId: '',
                createdAt: '2020-07-01 07:00:00',
                updatedAt: '2020-07-01 07:00:00',
            },
            {
                productId: 'p0008',
                info: 'たこ焼き',
                price: '600',
                rating: '2',
<<<<<<< HEAD
                imgUrl: 'https://images.unsplash.com/photo-1652752731860-ef0cf518f13a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8JUUzJTgxJTlGJUUzJTgxJTkzJUU3JTg0JUJDJUUzJTgxJThEfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
=======
                imgUrl: '',
                // imgUrl: 'https://media.istockphoto.com/id/689907622/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E6%97%A5%E6%9C%AC%E3%81%AE%E3%82%BF%E3%82%B3-%E3%83%9C%E3%83%BC%E3%83%AB%E3%81%9F%E3%81%93%E7%84%BC%E3%81%8D%E3%83%9C%E3%83%BC%E3%83%88.jpg?s=612x612&w=0&k=20&c=axOsJFoRp8LBfKpmCSrQl1GsV7T3DdQ3scF1ftBGEXQ=',
>>>>>>> 0b4994fdb7dfe371805846efd1de9643825192d7
                dealerId: '',
                createdAt: '2020-07-01 07:00:00',
                updatedAt: '2020-07-01 07:00:00',
            },
            {
                productId: 'p0009',
                info: 'カズノコ',
                price: '1000',
                rating: '4.1',
<<<<<<< HEAD
                imgUrl: 'https://images.unsplash.com/photo-1587203976879-ef56a73ff90b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fCVFMyU4MSVCMCVFMyU4MSVBQSVFMyU4MSVBQXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60',
=======
                imgUrl: '',
                // imgUrl: 'https://media.istockphoto.com/id/1175476169/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E6%A0%97%E3%81%AE%E3%82%AD%E3%83%B3%E3%83%88%E3%83%B3%E3%82%8A%E3%82%87%E3%81%86%E3%82%8A%E3%81%8A%E6%AD%A3%E6%9C%88%E6%96%99%E7%90%86.jpg?s=612x612&w=0&k=20&c=PtzmelvJnsAOJti3T-qRkgpFxxdBXw4KInHzWIydRF4=',
>>>>>>> 0b4994fdb7dfe371805846efd1de9643825192d7
                dealerId: '',
                createdAt: '2020-07-01 07:00:00',
                updatedAt: '2020-07-01 07:00:00',
            },
            {
                productId: 'p0010',
                info: 'フルーツ大福',
                price: '700',
                rating: '4',
<<<<<<< HEAD
                imgUrl: 'https://images.unsplash.com/photo-1652536942156-457e44f41732?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8JUU1JUE0JUE3JUU3JUE2JThGfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
=======
                imgUrl: '',
                // imgUrl: 'https://media.istockphoto.com/id/964486792/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E7%94%98%E3%81%84%E9%A4%A1%E3%81%A8%E3%83%95%E3%83%AB%E3%83%BC%E3%83%84-%E3%83%87%E3%82%B6%E3%83%BC%E3%83%88%E5%A4%A7%E7%A6%8F%E9%A4%85.jpg?s=612x612&w=0&k=20&c=o8ayM1_Iuym2Mi2DiOBbHTCwMbhxuAX5SXFMNijlqpI=',
>>>>>>> 0b4994fdb7dfe371805846efd1de9643825192d7
                dealerId: '',
                createdAt: '2020-07-01 07:00:00',
                updatedAt: '2020-07-01 07:00:00',
            },
            {
                productId: 'p0011',
                info: 'モナカ',
                price: '300',
                rating: '3',
<<<<<<< HEAD
                imgUrl: 'https://images.unsplash.com/photo-1626685214164-23330202e175?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fCVFNSU5MiU4QyVFOCU4RiU5MyVFNSVBRCU5MHxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60',
=======
                imgUrl: '',
                // imgUrl: 'https://media.istockphoto.com/id/1419513906/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E3%83%A2%E3%83%8A%E3%82%B3.jpg?s=612x612&w=0&k=20&c=H5CUpQ50su-uVmOavvq7-v5B548Tmgw-dueWeiIwgCw=',
>>>>>>> 0b4994fdb7dfe371805846efd1de9643825192d7
                dealerId: '',
                createdAt: '2020-07-01 07:00:00',
                updatedAt: '2020-07-01 07:00:00',
            },
            {
                productId: 'p0012',
                info: 'カツオのたたき',
                price: '1000',
                rating: '3.7',
<<<<<<< HEAD
                imgUrl: 'https://images.unsplash.com/photo-1530260626688-048279320445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8JUU1JTg4JUJBJUU4JUJBJUFCfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
=======
                imgUrl: '',
                // imgUrl: 'https://media.istockphoto.com/id/1315848777/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E5%8B%9D%E5%A4%AB%E3%81%AE%E3%81%9F%E3%81%9F%E3%81%8D.jpg?s=612x612&w=0&k=20&c=3Hqce0Rm25wpszN_nBHtYrDZbK5ftAWF1xZiz9zP7oU=',
>>>>>>> 0b4994fdb7dfe371805846efd1de9643825192d7
                dealerId: '',
                createdAt: '2020-07-01 07:00:00',
                updatedAt: '2020-07-01 07:00:00',
            },
            {
                productId: 'p0013',
                info: 'わらび餅',
                price: '200',
                rating: '4.7',
<<<<<<< HEAD
                imgUrl: 'https://images.unsplash.com/photo-1644432757699-bb5a01e8fb0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fCVFOCVCMSU4NnxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60',
=======
                imgUrl: '',
                // imgUrl: 'https://media.istockphoto.com/id/1353355898/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E9%BB%92%E3%81%84%E6%97%A5%E6%9C%AC%E3%81%AE%E3%83%88%E3%83%AC%E3%82%A4%E3%81%AB%E7%BD%AE%E3%81%8B%E3%82%8C%E3%81%9F%E3%83%AF%E3%83%A9%E3%83%93%E9%A4%85.jpg?s=612x612&w=0&k=20&c=V_AQbimm77o2Bl2H8foOQ-bywly90yTQ7nDbt8GeW1U=',
>>>>>>> 0b4994fdb7dfe371805846efd1de9643825192d7
                dealerId: '',
                createdAt: '2020-07-01 07:00:00',
                updatedAt: '2020-07-01 07:00:00',
            },
            {
                productId: 'p0014',
                info: '手作りシーサー',
                price: '3000',
                rating: '3.9',
<<<<<<< HEAD
                imgUrl: 'https://plus.unsplash.com/premium_photo-1667761256081-ded820d68ef4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8JUU3JThEJTg1JUU1JUFEJTkwfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
=======
                imgUrl: '',
                // imgUrl: 'https://media.istockphoto.com/id/1257711048/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E3%82%B7%E3%83%BC%E3%82%B5%E6%B2%96%E7%B8%84%E3%81%AE%E5%AE%88%E8%AD%B7%E3%83%A9%E3%82%A4%E3%82%AA%E3%83%B3%E3%82%BA.jpg?s=612x612&w=0&k=20&c=aZ6TeuriEbzJ4UbWvn23DpapRUccvMGZG-FrF7WLVh0=',
>>>>>>> 0b4994fdb7dfe371805846efd1de9643825192d7
                dealerId: '',
                createdAt: '2020-07-01 07:00:00',
                updatedAt: '2020-07-01 07:00:00',
            },
            {
                productId: 'p0015',
                info: '手作り饅頭',
                price: '500',
                rating: '2.7',
<<<<<<< HEAD
                imgUrl: 'https://images.unsplash.com/photo-1629984164142-21c2039de926?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8JUU5JUE0JTg1fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
=======
                imgUrl: '',
                // imgUrl: 'https://media.istockphoto.com/id/1349775328/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E6%9C%88%E8%A6%8B%E3%81%BE%E3%82%93%E3%81%98%E3%82%85%E3%81%86.jpg?s=612x612&w=0&k=20&c=nRU5pUPmETZq_P6f7cWbaG1_ZTfhPcHF7TXDLxWpx78=',
>>>>>>> 0b4994fdb7dfe371805846efd1de9643825192d7
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
