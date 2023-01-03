const userResolvers = require('./users')
const messageResolvers = require('./messages')
const popularResolvers = require('./populars')
const productResolvers = require('./products')
const cartResolvers = require('./carts')

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
    },
    Mutation: {
        ...userResolvers.Mutation,
        ...messageResolvers.Mutation,
    },
}
