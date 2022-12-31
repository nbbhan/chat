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
    type Query {
        getUsers: [User]!
        getProfile: [Profile]!
        login(username: String!, password: String!): User!
        getMessages(from: String!): [Message]!
        getPopular: [Popular]!
    }
    type Mutation {
        register(username: String!, email: String!, password: String!, confirmPassword: String!): User!
        sendMessage(to: String!, content: String!): Message!
    }
`
