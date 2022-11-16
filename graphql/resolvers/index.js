const userResolvers = require('./users')
const messageResolvers = require('./messages')
const popularResolvers = require('./populars')
const dealerResolvers = require('./dealers')
const watchResolvers = require('./watches')
const productResolvers = require('./products')
const cartResolvers = require('./carts')
const purchaseResolvers = require('./purchases')
const pointResolvers = require('./points')

module.exports = {
    Message: {
        createdAt: (parent) => parent.createdAt.toISOString(),
    },
    Query: {
        ...userResolvers.Query,
        ...messageResolvers.Query,
        ...popularResolvers.Query,
        ...dealerResolvers.Query,
        ...watchResolvers.Query,
        ...productResolvers.Query,
        ...cartResolvers.Query,
        ...purchaseResolvers.Query,
        ...pointResolvers.Query,
    },
    Mutation: {
        ...userResolvers.Mutation,
        ...messageResolvers.Mutation,
    },
}
