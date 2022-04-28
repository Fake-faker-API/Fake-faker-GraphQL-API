const { ApolloServer } = require('apollo-server');
const { typeDefs } = require("./graphql/typeDefs/typeDefs");
const { resolvers } = require("./graphql/resolvers/resolvers");
const config = require("./lib/config/config");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true
});

server.listen({ port: config.PORT ||  4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});