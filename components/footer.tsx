import Image from 'next/image'
import Link from 'next/link'

import { logo } from './header'

const Footer = () => (
  <>
    <footer className="bg-black py-24 text-white flex flex-col items-center">
      <div className="w-48 mb-8">
        <Link href='/'>
          <a>
            <Image src={logo} />
          </a>
        </Link>

      </div>

      <div className="mb-2 text-sm">
        <Link href='/terms-conditions'>
          <a>
            Terms & Conditions
          </a>
        </Link>
      </div>

      <div>
        © Andre G. Holdings LLC {new Date().getFullYear()}
      </div>
    </footer>
  </>
)

export default Footer