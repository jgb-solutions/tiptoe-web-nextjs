import {
  ApolloClient,
  ApolloLink,
  createHttpLink, InMemoryCache
} from '@apollo/client'
import { PrismaClient } from '@prisma/client'
import { onError } from "@apollo/client/link/error"
import firebase from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyCLi2-tm5k8h260P1wzwbcUqNTaVwsuXBc",
  authDomain: "project-x-c7df8.firebaseapp.com",
  databaseURL: "https://project-x-c7df8.firebaseio.com",
  projectId: "project-x-c7df8",
  storageBucket: "project-x-c7df8.appspot.com",
  messagingSenderId: "752917206791",
  appId: "1:752917206791:web:89b3e229936a409d3797a2",
  measurementId: "G-5P489M2G9M",
}

import useStore, { INITIAL_USER_STATE } from "../store"
import { GRAPHQL_API_URL } from "../utils/constants"

const apolloClient = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        console.log(graphQLErrors)
        graphQLErrors.forEach(({ message, code }: any) => {
          if (code === 401) {
            useStore.setState({ authData: INITIAL_USER_STATE })
          }
        })
      }

      if (networkError) {
        console.log("network errors", networkError)
        // client.mutate({
        //   mutation: notificationAddMutation,
        //   variables: {
        //     text: 'There was a network problem. Please check your connection',
        //   },
        // })
      }
    }),
    createHttpLink({ uri: GRAPHQL_API_URL }),
  ]),
  headers: {
    // get the authentication access_token from local storage if it exists
    authorization: `Bearer ${useStore.getState().authData.access_token}`,
  },
  cache: new InMemoryCache(),
})

let prisma: PrismaClient

if (!global.prisma) {
  prisma = new PrismaClient()
  global.prisma = prisma
} else {
  prisma = global.prisma
}

export {
  prisma,
  firebase
}
