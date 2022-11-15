const { UserInputError, AuthenticationError } = require('apollo-server')
const { Op } = require('sequelize')

const { Purchase } = require('../../models')

module.exports = {
    Query: {
        getPurchase: async (_, __) => {
            try {
                let purchases = await Purchase.findAll()

                return purchases
            } catch (err) {
                console.log(err)
                throw err
            }
        },
    },
}
