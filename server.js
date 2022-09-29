const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql `
    type Query {
        "Simple start!"
        hello: String
    }
`;

const resolvers = {
    Query: {
        hello: () => 'fucking!!!!',
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  
  // The `listen` method launches a web server.
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });