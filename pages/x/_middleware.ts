import { getSession } from 'next-auth/react'
import type { NextFetchEvent, NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { Routes } from 'routes'
export async function middleware(req: NextRequest, ev: NextFetchEvent) {
  // const userSession = await getSession({ req })

  // if (!userSession) {
  //   return NextResponse.redirect(Routes.login)
  // }

  return NextResponse.next()

  return new Response('Aut', {
    status: 200,
    headers: {
    }
  })
}