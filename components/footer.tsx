import Image from 'next/image'
import Link from 'next/link'

import { Colors } from '../utils/theme'
import { logo } from './header'

const Footer = () => (
  <>
    <footer className="bg-black py-24 text-white flex flex-col items-center">
      <div className="w-48 mb-8">
        <Link href='/'>
          <Image src={logo} />
        </Link>

      </div>

      <div className="mb-2 text-sm">
        <Link href='/terms-conditions'>
          Terms & Conditions
        </Link>
      </div>

      <div>
        © Andre G. Holdings LLC {new Date().getFullYear()}
      </div>
    </footer>
  </>
)

export default Footer