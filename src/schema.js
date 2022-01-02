import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from './resolvers'

const typeDefs = `
  type Query {
    hello: String,
    greet(name: String!): String
    tasks: [Task]
    users: [User]
  }

  type Task {
    _id: ID,
    title: String!,
    description: String!
    category: Int
  }

  type User {
    _id: ID
    firstname: String!
    lastname: String!
    email: String!
  }

  type Mutation {
    createTask(input: TaskInput): Task
    createUser(input: UserInput): User
    deleteUser(_id: ID): User
  }

  input TaskInput {
    title: String!,
    description: String!,
    category: Int
  }

  input UserInput {
    firstname: String!
    lastname: String!
    email: String!
  }
`

export default makeExecutableSchema({
  typeDefs,
  resolvers
})
