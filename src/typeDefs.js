const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Product {
    id: ID
    name: String
    description: String
    code: String
    price: Float
  }

  type Query {
    getAll: [Product]
    getById(id: ID): Product
    # getById: [Product]
  }
  
  type Mutation {

    createProduct(
      name: String
      description: String
      code: String
      price: Float
    ): Product

    updateProduct(
      id: ID
      name: String
      description: String
      code: String
      price: Float
    ): Product

    deleteProduct(id: ID!): Product
  }
`;

module.exports = typeDefs;
