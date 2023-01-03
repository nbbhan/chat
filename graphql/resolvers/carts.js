const { AuthenticationError } = require('apollo-server')
const { Op } = require('sequelize')

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
}
