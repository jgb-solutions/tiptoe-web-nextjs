import { prisma } from "../utils/clients"

const resolvers = {
  Query: {
    users: async (parent, args, context, info) => {
      console.log("parent", parent)
      console.log("args", args)
      console.log("context", context)
      console.log("info", info)

      return await prisma.user.findMany()
    },
    me: async (parent, args, context, info) => {
      console.log("parent", parent)
      console.log("args", args)
      console.log("context", context)
      console.log("info", info)

      return context.session.user
    }
  },

  Mutation: {
    // update: async (_, { id, input }) => {
    //   return "product"
    // }
  },
}



export { resolvers }