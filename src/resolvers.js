import { tasks } from './sample'

import User from './models/user'

export const resolvers = {
  Query: {
    hello: () => 'Hello World with GraphQl',
    greet: (root, { name }, ctx) => {
      console.log(ctx)

      return `Hello ${name}!`
    },
    tasks: () => tasks
  },
  Mutation: {
    createTask: (_, { input }) => {
      const task = {
        _id: tasks.length + 1,
        ...input
      }

      tasks.push(task)
      
      return task
    },
    createUser: async (_, { input }) => {
      const user = new User(input)

      await user.save()

      return user
    }
  }
}
