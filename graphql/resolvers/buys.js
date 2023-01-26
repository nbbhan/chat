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
    // Mutation: {
    //     addBuy: async (_, args) => {
    //         let { user, productId, info, price, imgUrl } = args

    //         try {
    //             const newItem = await Buy.create({
    //                 user,
    //                 productId,
    //                 info,
    //                 price,
    //                 imgUrl,
    //             })

    //             return newItem
    //         } catch (err) {
    //             console.log(err)
    //             throw err
    //         }
    //     },
    //     deleteCart: async (_, args) => {
    //         try {
    //             const carts = await Cart.findOne({
    //                 where: { user: { [Op.eq]: args.user }, productId: { [Op.eq]: args.productId } },
    //             }).then((cart) => {
    //                 cart.destroy()
    //             })

    //             return carts
    //         } catch (err) {
    //             console.log(err)
    //             throw err
    //         }
    //     },
    // },
}
