const { UserInputError, AuthenticationError } = require('apollo-server')
const { Op } = require('sequelize')

const { Dealer } = require('../../models')

module.exports = {
    Query: {
        getDealer: async (_, __) => {
            try {
                let dealers = await Dealer.findAll()

                return dealers
            } catch (err) {
                console.log(err)
                throw err
            }
        },
    },
}
