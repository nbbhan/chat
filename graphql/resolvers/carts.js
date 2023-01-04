const { AuthenticationError } = require('apollo-server')

const { Cart } = require('../../models')

module.exports = {
    Query: {
        getCart: async (_, __, { user }) => {
            try {
                if (!user) throw new AuthenticationError('Unauthenticated')

                let carts = await Cart.findAll({
                    where: { user: user.username },
                })

                return carts
            } catch (err) {
                console.log(err)
                throw err
            }
        },
    },
    Mutation: {
        addCart: async (_, args) => {
            let { productId, user } = args

            try {
                const newItem = await Cart.create({
                    productId,
                    user,
                })

                return newItem
            } catch (err) {
                console.log(err)
                throw err
            }
        },
        deleteCart: async (_, args) => {
            try {
                const allOfCart = await Cart.findAll()

                const item = await Cart.findOne({
                    where: { productId: args.productId, user: args.user },
                })

                console.log(allOfCart)

                return item
            } catch (err) {
                console.log(err)
                throw err
            }
        },
    },
}
