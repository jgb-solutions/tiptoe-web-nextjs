import { FC } from 'react'
import { useSession, signOut } from "next-auth/react"
import Button from '@mui/material/Button'

const Header: FC = () => {
  const session = useSession()

  return (
    <>
      {JSON.stringify(session)}
      <Button variant="contained" onClick={() => signOut()}>Log out</Button>
    </>
  )
}

export default Header