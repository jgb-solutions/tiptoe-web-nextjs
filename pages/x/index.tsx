import { GetServerSideProps, NextPage } from "next"
import DefaultLayout from "@/components/layouts/Default"
import { getSession, signIn, signOut } from "next-auth/react"
import { Session } from "next-auth"
import { Routes } from "routes"
import MediaCard from "@/components/MediaCard"

type Props = {
  userSession: Session
}

const X: NextPage<Props> = (props) => {
  return (
    <DefaultLayout>
      <MediaCard />
    </DefaultLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // const userSession = await getSession(ctx)

  // if (!userSession) {
  //   return {
  //     redirect: {
  //       destination: Routes.login,
  //       permanent: false
  //     }
  //   }
  // }
  return {
    props: {}
  }
}

export default X