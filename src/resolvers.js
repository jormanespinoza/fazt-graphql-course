import { tasks } from './sample'

export const resolvers = {
  Query: {
    hello: () => 'Hello World with GraphQl',
    greet: (root, { name }) => `Hello ${name}!`,
    tasks: () => tasks
  }
}
