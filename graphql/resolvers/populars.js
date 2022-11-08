const { UserInputError, AuthenticationError } = require('apollo-server')
const { Op } = require('sequelize')

const { Popular } = require('../../models')

module.exports = {
  Query: {
    getPopular: async () => {
        
    }
  },
}