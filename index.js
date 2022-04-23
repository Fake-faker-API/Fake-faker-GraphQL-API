const { ApolloServer } = require('apollo-server');
const { typeDefs } = require("./graphqlLayer/typeDefs");
const { resolvers } = require("./graphqlLayer/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});