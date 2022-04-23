const { ApolloServer } = require('apollo-server');
const { typeDefs } = require("./graphqlLayer/typeDefs");
const { resolvers } = require("./graphqlLayer/resolvers");
const config = require("./lib/config");

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen({ port: config.PORT ||  4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});