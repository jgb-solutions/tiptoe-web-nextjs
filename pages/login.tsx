import { GetServerSideProps, NextPage } from "next"
import AuthLayout from "@/components/layouts/Auth"
import { getSession, signIn, signOut } from "next-auth/react"
import { Session } from "next-auth"
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'

import { Routes } from "routes"

type Props = {}

const X: NextPage<Props> = (props) => {
  return (
    <AuthLayout>
      <div className="flex border-2 h-screen">
        <div className="md:w-1/2 flex flex-col items-center justify-center">
          <h1>
            Some page
          </h1>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                required
                id="outlined-required"
                label="Required"
                defaultValue="Hello World"
              />
              <TextField
                disabled
                id="outlined-disabled"
                label="Disabled"
                defaultValue="Hello World"
              />
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
              />
              <TextField
                id="outlined-read-only-input"
                label="Read Only"
                defaultValue="Hello World"
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                id="outlined-number"
                label="Number"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField id="outlined-search" label="Search field" type="search" />
              <TextField
                id="outlined-helperText"
                label="Helper text"
                defaultValue="Default Value"
                helperText="Some important text"
              />
            </div>
          </Box>
        </div>
        <div className="bg-black text-white flex-1">
          some stuff here
        </div>
      </div>
    </AuthLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const userSession = await getSession(ctx)

  if (userSession) {
    return {
      redirect: {
        destination: Routes.x,
        permanent: false
      }
    }
  }
  return {
    props: {}
  }
}

export default X