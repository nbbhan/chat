const { UserInputError, AuthenticationError } = require('apollo-server')
const { Op } = require('sequelize')

const { Watch } = require('../../models')

module.exports = {
    Query: {
        getWatch: async (_, __) => {
            try {
                let watches = await Watch.findAll()

                return watches
            } catch (err) {
                console.log(err)
                throw err
            }
        },
    },
}
