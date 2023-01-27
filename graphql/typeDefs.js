const { gql } = require('apollo-server')

module.exports = gql`
    type User {
        username: String!
        email: String
        createdAt: String!
        token: String
        imageUrl: String
        latestMessage: Message
    }
    type Profile {
        username: String!
        createdAt: String!
        imageUrl: String
        buyPoint: Float
        getPoint: Float
        follow: Float
    }
    type Message {
        uuid: String!
        content: String!
        from: String!
        to: String!
        createdAt: String!
    }
    type Popular {
        productId: String!
        info: String!
        price: String!
        rating: String
        imgUrl: String!
        dealerId: String
    }
    type Product {
        productId: String!
        info: String!
        price: String!
        rating: String
        imgUrl: String!
        dealerId: String
        area: String
        prefecture: String
    }
    type Cart {
        productId: String!
        user: String!
    }
    type Favorite {
        productId: String!
        user: String!
    }
    type Buy {
        user: String!
        productId: String!
        info: String!
        price: String!
        imgUrl: String!
    }
    type Subscription {
        newMessage: Message!
    }
    type Query {
        getUsers: [User]!
        login(username: String!, password: String!): User!
        getMessages(from: String!): [Message]!
        getProfile: [Profile]!
        getPopular: [Popular]!
        getProduct: [Product]!
        getCart: [Cart]!
        getFavorite: [Favorite]!
        getBuy: [Buy]!
    }
    type Mutation {
        register(username: String!, email: String!, password: String!, confirmPassword: String!): User!
        sendMessage(to: String!, content: String!): Message!
        addCart(productId: String!, user: String!): Cart!
        deleteCart(productId: String!, user: String!): Cart
        changeProfile(user: String!, img: String!): Profile
        addProduct(
            productId: String!
            info: String!
            price: String!
            imgUrl: String!
            area: String!
            prefecture: String!
        ): Product!
    }
`
