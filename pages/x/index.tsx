import { GetServerSideProps, NextPage } from "next"
import DefaultLayout from "@/components/layouts/Default"
import { getSession, signIn, signOut } from "next-auth/react"
import { Session } from "next-auth"
import Button from '@mui/material/Button'
import { Routes } from "routes"

type Props = {
  userSession: Session
}

const X: NextPage<Props> = (props) => {
  return (
    <DefaultLayout>
      <h1>
        Some page
      </h1>
    </DefaultLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const userSession = await getSession(ctx)

  if (!userSession) {
    return {
      redirect: {
        destination: Routes.login,
        permanent: false
      }
    }
  }
  return {
    props: {}
  }
}

export default X