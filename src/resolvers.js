import { tasks } from './sample'

import User from './models/User'

export const resolvers = {
  Query: {
    hello: () => 'Hello World with GraphQl',
    greet: (root, { name }, ctx) => {
      console.log(ctx)

      return `Hello ${name}!`
    },
    tasks: () => tasks,
    users: async () => await User.find()
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
    },
    updateUser: async (_, { _id, input }) => await User.findByIdAndUpdate(_id, input, { new: true }),
    deleteUser: async (_, { _id }) => await User.findByIdAndDelete(_id)
  }
}
