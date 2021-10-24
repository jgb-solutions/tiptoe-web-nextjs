import { FC } from 'react'
import Header from '../Header'

const Default: FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Default