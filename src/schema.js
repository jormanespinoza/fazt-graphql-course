import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from './resolvers'

const typeDefs = `
  type Query {
    hello: String,
    greet(name: String!): String
    tasks: [Task]
  }

  type Task {
    _id: ID,
    title: String!,
    description: String!
    category: Int
  }
`

export default makeExecutableSchema({
  typeDefs,
  resolvers
})
