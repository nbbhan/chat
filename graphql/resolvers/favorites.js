const { AuthenticationError } = require('apollo-server')

const { Favorite } = require('../../models')

module.exports = {
    Query: {
        getFavorite: async (_, __, { user }) => {
            try {
                if (!user) throw new AuthenticationError('Unauthenticated')

                let favovites = await Favorite.findAll({
                    where: { user: user.username },
                })

                return favovites
            } catch (err) {
                console.log(err)
                throw err
            }
        },
    },
}
