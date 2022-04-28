const { ApolloServer } = require('apollo-server');
const {
  ApolloServerPluginLandingPageGraphQLPlayground
} = require('apollo-server-core');
const { typeDefs } = require('./graphql/typeDefs/typeDefs');
const { resolvers } = require('./graphql/resolvers/resolvers');
const config = require('./lib/config/config');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  plugins: [
    ApolloServerPluginLandingPageGraphQLPlayground(),
  ],
});

server.listen({ port: config.PORT ||  4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});