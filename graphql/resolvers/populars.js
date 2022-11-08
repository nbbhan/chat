const { UserInputError, AuthenticationError } = require('apollo-server')
const { Op } = require('sequelize')

const { Popular } = require('../../models')

module.exports = {
  Query: {
    getPopular: async (_, __) => {
      try{
        let populars = await Popular.findAll()

        return populars
      }catch(err){
        console.log(err)
        throw err
      }
    }
  },
}