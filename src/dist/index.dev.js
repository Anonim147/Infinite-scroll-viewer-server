"use strict";

var _graphqlYoga = require("graphql-yoga");

var _resolvers = require("./resolvers");

var server = new _graphqlYoga.GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers: _resolvers.resolvers
});
server.start(function () {
  return console.log("Server is running on http://localhost:4000");
});