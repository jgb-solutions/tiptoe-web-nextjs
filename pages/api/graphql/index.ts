import { send } from 'micro'
import Cors from "micro-cors"
import { getSession } from "next-auth/react"
import { ApolloServer } from 'apollo-server-micro'
import { NextApiRequest, NextApiResponse } from "next"
import { AuthenticationError } from 'apollo-server-errors'
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core"

import { typeDefs } from "../../../graphql/schema"
import { resolvers } from "../../../graphql/resolvers"

export const config = {
  api: {
    bodyParser: false,
  },
}

const cors = Cors()

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const session = await getSession({ req })

    if (!session) throw new AuthenticationError('You must be logged in.')

    return { session }
  },
  plugins: [
    ApolloServerPluginLandingPageGraphQLPlayground({
      settings: {
        // "editor.theme": "light",
        "request.credentials": "include",
      }
    })
  ],
})

const startServer = apolloServer.start()

const GraphQLAPI = cors(async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "OPTIONS") {
    send(res, 200, 'ok')
    return
  }

  await startServer
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res)
})

export default GraphQLAPI