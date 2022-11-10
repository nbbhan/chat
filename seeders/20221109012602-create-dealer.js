'use strict'

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('dealers', [
            {
                id: 'd0001',
                account: 'クァン',
                username: 'quan',
                email: 'quan@mail.com',
                password: '000000',
                imgUrl: '',
                createdAt: '2020-07-01 07:00:00',
                updatedAt: '2020-07-01 07:00:00',
                info: "['たこ焼き屋QUAN', '大阪府大阪市1-1', '0120-00-1111']",
                intro: '２０年以上、たこ焼きを焼き続けています。ぜひ、お越しになってください。',
            },
            {
                id: 'd0002',
                account: '近田',
                username: 'konda',
                email: 'konda@mail.com',
                password: '000000',
                imgUrl: '',
                createdAt: '2020-07-01 07:00:00',
                updatedAt: '2020-07-01 07:00:00',
                info: "['KONDAのお抹茶庵', '京都府京都市22-2', '0120-00-2222']",
                intro: '代々受け継いできた、本場の抹茶です。特に宇治抹茶がおすすめです。',
            },
            {
                id: 'd0003',
                account: '小川',
                username: 'ogawa',
                email: 'ogawa@mail.com',
                password: '000000',
                imgUrl: '',
                createdAt: '2020-07-01 07:00:00',
                updatedAt: '2020-07-01 07:00:00',
                info: "['OGAWA's fruits', '青森県青森市33-4', '0120-00-3333']",
                intro: 'リンゴが有名な青森で果物農家を営んでいます。リンゴ以外にもおいしい果物をたくさん作っているので、ぜひ一度味わってみてください。',
            },
            {
                id: 'd0004',
                account: '荻野',
                username: 'ogino',
                email: 'ogino@mail.com',
                password: '000000',
                imgUrl: '',
                createdAt: '2020-07-01 07:00:00',
                updatedAt: '2020-07-01 07:00:00',
                info: "['美味すぎ饅頭', '広島県広島市4-4', '0120-00-4444']",
                intro: '私が自宅(店)で丁寧に丹精込めて作った手作りの饅頭です。とても美味しく出来たと思っているので食べてほしいです。',
            },
            {
                id: 'd0005',
                account: '金井',
                username: 'kanai',
                email: 'kanai@mail.com',
                password: '000000',
                imgUrl: '',
                createdAt: '2020-07-01 07:00:00',
                updatedAt: '2020-07-01 07:00:00',
                info: "['手作りシーサーズ', '沖縄県那覇市5-5', '0120-00-5555']",
                intro: '家の守り神「シーサー」を可愛らしく、手作りしています。魔除けにぜひ！',
            },
            {
                id: 'd0006',
                account: '鎌田',
                username: 'kamata',
                email: 'kamata@mail.com',
                password: '000000',
                imgUrl: '',
                createdAt: '2020-07-01 07:00:00',
                updatedAt: '2020-07-01 07:00:00',
                info: "['ララライス', '新潟県新潟市66-6', '0120-00-6666']",
                intro: '米を沢山作っています。農薬を使わず、品種改良を加え、日々よりおいしいごはんを求めて農業に明け暮れています。朝はパン派です。',
            },
            {
                id: 'd0007',
                account: '島田',
                username: 'shimada',
                email: 'shimada@mail.com',
                password: '000000',
                imgUrl: '',
                createdAt: '2020-07-01 07:00:00',
                updatedAt: '2020-07-01 07:00:00',
                info: "['うなぎのぼり', '愛知県名古屋市7-7-7', '0120-00-7777']",
                intro: '高級なうなぎを様々な形で提供しています。うなぎの蒲焼きがおすすめです。',
            },
            {
                id: 'd0008',
                account: '駒場',
                username: 'komaba',
                email: 'komaba@mail.com',
                password: '000000',
                imgUrl: '',
                createdAt: '2020-07-01 07:00:00',
                updatedAt: '2020-07-01 07:00:00',
                info: "['モナカヤナイカ', '静岡県富士市88-8', '0120-00-8888']",
                intro: '上あごに引っ付かない革命的なモナカを作っています。１つ食べたら２つ目も食べたくなってしまう、やみつきなモナカです。',
            },
            {
                id: 'd0009',
                account: '夜清',
                username: 'yorushin',
                email: 'utsumi@mail.com',
                password: '000000',
                imgUrl: '',
                createdAt: '2020-07-01 07:00:00',
                updatedAt: '2020-07-01 07:00:00',
                info: "['どん衛門', '香川県丸亀市9-9', '0120-00-9999']",
                intro: 'こだわりのだし、うま味のあるつゆ、そしてつるつるの麺を合わせた究極のうどんです。',
            },
            {
                id: 'd0010',
                account: '神戸',
                username: 'kamido',
                email: 'kamido@mail.com',
                password: '000000',
                imgUrl: '',
                createdAt: '2020-07-01 07:00:00',
                updatedAt: '2020-07-01 07:00:00',
                info: "['神戸上腕屋', '兵庫県神戸市10-10', '0120-00-1010']",
                intro: '国内最高級ランクの神戸牛。旨味とサシの甘みを味わえるロース。脂身が少ない部位で弾力があり、食べごたえのある赤身スライス。すき焼き、焼きしゃぶなど幅広く楽しめます。',
            },
        ])
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('dealers', null, {})
    },
}

// {
//     id: 'd0001',
//     account: '',
//     username: '',
//     email: '@mail.com',
//     password: '000000',
//     imgUrl: '',
//     createdAt: '2020-07-01 07:00:00',
//     updatedAt: '2020-07-01 07:00:00',
//     info: "['', '', '']",
//     intro: '',
// },
