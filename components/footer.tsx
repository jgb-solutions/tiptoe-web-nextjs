import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import Logo from './Logo'

const Footer: FC = () => (
  <>
    <footer className="bg-black py-24 text-white flex flex-col items-center">
      <div className="w-48 mb-8">
        <Link href='/'>
          <a>
            <Logo />
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