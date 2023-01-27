const userResolvers = require('./users')
const messageResolvers = require('./messages')
const popularResolvers = require('./populars')
const productResolvers = require('./products')
const cartResolvers = require('./carts')
const favoriteResolvers = require('./favorites')
const buyResolvers = require('./buys')

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
        ...buyResolvers.Query,
    },
    Mutation: {
        ...userResolvers.Mutation,
        ...messageResolvers.Mutation,
        ...cartResolvers.Mutation,
        ...productResolvers.Mutation,
    },
    Subscription: {
        ...messageResolvers.Subscription,
    },
}
