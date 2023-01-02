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
}
