const userResolvers = require('./users')
const messageResolvers = require('./messages')
const popularResolvers = require('./populars')

module.exports = {
    Message: {
        createdAt: (parent) => parent.createdAt.toISOString(),
    },
    Query: {
        ...userResolvers.Query,
        ...messageResolvers.Query,
        ...popularResolvers.Query,
    },
    Mutation: {
        ...userResolvers.Mutation,
        ...messageResolvers.Mutation,
    },
}
