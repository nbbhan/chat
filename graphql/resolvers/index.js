const userResolvers = require('./users')
const messageResolvers = require('./messages')
const popularResolvers = require('./populars')
const productResolvers = require('./products')
const cartResolvers = require('./carts')
const favoriteResolvers = require('./favorites')

module.exports = {
    Message: {
        createdAt: (parent) => parent.createdAt.toISOString(),
    },
    Query: {
        ...userResolvers.Query,
        ...messageResolvers.Query,
        ...popularResolvers.Query,
        ...productResolvers.Query,
        ...cartResolvers.Query,
        ...favoriteResolvers.Query,
    },
    Mutation: {
        ...userResolvers.Mutation,
        ...messageResolvers.Mutation,
        ...cartResolvers.Mutation,
        ...productResolvers.Mutation,
    },
}
