import { NextApiRequest, NextApiResponse } from "next"
import { getSession } from "next-auth/react"
import { prisma } from "../../../utils/clients"
import { User } from '@prisma/client'

type ResponseData = User[] | { error: string }

const GraphQLAPI = async (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
  const session = await getSession({ req })

  if (!session) {
    return res.status(401).json({ error: `You need to log in.` })
  }

  const data = await prisma.user.findMany()

  return res.json(data)
}

export default GraphQLAPI