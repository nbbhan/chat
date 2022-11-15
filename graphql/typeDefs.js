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
        imgUrl: String!
        dealerId: String
        rating: String!
    }
    type Dealer {
        dealerId: String!
        account: String!
        username: String!
        email: String
        password: String
        imgUrl: String
        info: String!
        intro: String!
    }
    type Product {
        productId: String!
        info: String!
        dealerId: String
        price: Integer!
        imgUrl: String!
        intro: String!
    }
    type Watch {
        watchId: String!
        userIdId: String
        productId: String!
    }
    type Query {
        getUsers: [User]!
        login(username: String!, password: String!): User!
        getMessages(from: String!): [Message]!
        getPopular: [Popular]!
        getDealer: [Dealer]!
        getProduct: [Product]!
    }
    type Mutation {
        register(username: String!, email: String!, password: String!, confirmPassword: String!): User!
        sendMessage(to: String!, content: String!): Message!
    }
`
