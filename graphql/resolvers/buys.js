const { AuthenticationError } = require('apollo-server')

const { Buy } = require('../../models')

module.exports = {
    Query: {
        getBuy: async (_, __, { user }) => {
            try {
                if (!user) throw new AuthenticationError('Unauthenticated')

                let buys = await Buy.findAll({
                    where: { user: user.username },
                })

                return buys
            } catch (err) {
                console.log(err)
                throw err
            }
        },
    },
}
