const { UserInputError, AuthenticationError } = require('apollo-server')
const { Op } = require('sequelize')

const { Point } = require('../../models')

module.exports = {
    Query: {
        getPoint: async (_, __) => {
            try {
                let points = await Point.findAll()

                return points
            } catch (err) {
                console.log(err)
                throw err
            }
        },
    },
}
