const { Product } = require('../../models')

module.exports = {
    Query: {
        getProduct: async (_, __) => {
            try {
                let products = await Product.findAll()

                return products
            } catch (err) {
                console.log(err)
                throw err
            }
        },
    },
    Mutation: {
        addProduct: async (_, args) => {
            let { productId, info, price, imgUrl, area, prefecture } = args

            try {
                const newItem = await Product.create({
                    productId,
                    info,
                    price,
                    imgUrl,
                    area,
                    prefecture,
                })

                return newItem
            } catch (err) {
                console.log(err)
                throw err
            }
        },
    },
}
