import { FC } from 'react'
import Image from 'next/image'

import { APP_NAME } from 'utils/constants'
import whiteLogo from '../public/images/logo2.png'
import blueLogo from '../public/images/logo.png'

type Props = {
  blue?: boolean
  height?: number
}
const Logo: FC<Props> = ({ blue, height }) => (
  // <h2 title={APP_NAME} className="relative">
  <Image
    src={blue ? blueLogo : whiteLogo}
    height={height || 50}
    width={height ? height * 150 / 50 : 50}
  />
  // </h2>
)

export default Logo