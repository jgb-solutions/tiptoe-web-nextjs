import { prisma } from "../utils/clients"

const resolvers = {
  Query: {
    // products
    getProducts: async () => {
      return [{
        name: 'Jean'
      }]
    },
    getProduct: async (_, { id }) => {
      return {}
    },
    users: async (parent, args, context, info) => {
      console.log("parent", parent)
      console.log("args", args)
      console.log("context", context)
      console.log("info", info)

      return await prisma.user.findMany()
    }
  },

  Mutation: {
    // products
    newProduct: async (_, { input }) => {

    },
    updateProduct: async (_, { id, input }) => {


      return "product"
    },
    deleteProduct: async (_, { id }) => {

      return 'Producto eliminado'
    },
  },
}



export { resolvers }