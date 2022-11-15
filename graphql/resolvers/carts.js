const { UserInputError, AuthenticationError } = require('apollo-server')
const { Op } = require('sequelize')

const { Cart } = require('../../models')

module.exports = {
    Query: {
        getCart: async (_, __) => {
            try {
                let carts = await Cart.findAll()

                return carts
            } catch (err) {
                console.log(err)
                throw err
            }
        },
    },
}
