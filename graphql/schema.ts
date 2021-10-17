import { gql } from "apollo-server-core"

const typeDefs = gql`
  type Query {
    getProducts: [Product]
    getProduct(id: ID!): Product
    users: [User]
  }

  type Mutation {
    newProduct(input: ProductInput): Product
    updateProduct(id: ID!, input: ProductInput): Product
    deleteProduct(id: ID!): String
  }

  type User {
    id: ID
    name: String
    email: String
    image: String
  }

  type Product {
    id: ID
    name: String
    productionCapacity: Int
    price: Float
    description: String
  }

  input ProductInput {
    name: String!
    productionCapacity: Int!
    price: Float!
    description: String
  }
`

export { typeDefs }