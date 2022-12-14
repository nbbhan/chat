const { AuthenticationError } = require('apollo-server')

const { Cart } = require('../../models')
const { Op } = require('sequelize')

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
                const carts = await Cart.findAll({
                    attributes: ['id', 'user', 'productId'],
                    where: { user: { [Op.eq]: args.user } },
                })

                await carts.splice(2, 1)

                return carts
            } catch (err) {
                console.log(err)
                throw err
            }
        },
    },
}
