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
        price: Float!
        rating: String!
        imgUrl: String!
        dealerId: String
    }
    type Dealer {
        dealerId: String!
        account: String!
        username: String!
        email: String!
        password: String!
        imgUrl: String
        info: String!
        intro: String!
    }
    type Product {
        productId: String!
        info: String!
        dealerId: String!
        price: Float!
        imgUrl: String!
        intro: String!
    }
    type Watch {
        watchId: String!
        userId: String!
        productId: String!
    }
    type Cart {
        addtocartId: String
        userId: String!
        productId: String!
        quantity: Float!
    }
    type Point {
        userId: String!
        point: Float!
        token: String!
    }
    type Purchase {
        historyId: String!
        userId: String!
        productId: String!
        quantity: Float!
        returnedQuantity: Float
    }
    type Query {
        getUsers: [User]!
        login(username: String!, password: String!): User!
        getMessages(from: String!): [Message]!
        getPopular: [Popular]!
        getDealer: [Dealer]!
        getProduct: [Product]!
        getWatch: [Watch]!
        getCart: [Cart]!
        getPoint: [Point]!
        getPurchase: [Purchase]!
    }
    type Mutation {
        register(username: String!, email: String!, password: String!, confirmPassword: String!): User!
        sendMessage(to: String!, content: String!): Message!
    }
`
