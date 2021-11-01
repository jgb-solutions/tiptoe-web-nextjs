import { FC } from 'react'
import Header from '../Header'

const Default: FC = ({ children }) => {
  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto">
        {children}
      </div>
    </>
  )
}

export default Default