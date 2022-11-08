const { UserInputError, AuthenticationError } = require('apollo-server')
const { Op } = require('sequelize')

const { Popular } = require('../../models')

module.exports = {
  Query: {
    getPopular: async () => {
      try{
        
      }catch(err){
        console.log(err)
        throw err
      }
    }
  },
}