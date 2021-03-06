"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const { makeExecutableSchema } = require("graphql-tools");

// Some fake data
const books = [
  {
    title: "Harry Potter and the Sorcerer's stone",
    author: "J.K. Rowling"
  },
  {
    title: "Jurassic Park",
    author: "Michael Crichton"
  }
];

// The GraphQL schema in string form
let typeDefs = `
  type Query { books: [Book] }
  type Book { title: String, author: String }
`;

// The resolvers
let resolvers = {
  Query: { books: () => books }
};


const priceTypeDef = require("./graphql/price/schema").priceSchema,
  priceResolver = require("./graphql/price/resolver").priceResolver;

resolvers = priceResolver
typeDefs = priceTypeDef

// Put together a schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

// const schema1 = makeExecutableSchema({
//     priceTypeDef,
//   priceResolver
// });

// Initialize the app
const app = express();

// app.use(cors);

// The GraphQL endpoint
app.use("/graphql", bodyParser.json(), graphqlExpress({ schema }));

// GraphiQL, a visual editor for queries
app.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

// Start the server
app.listen(3000, () => {
  console.log("Go to http://localhost:3000/graphiql to run queries!");
});
