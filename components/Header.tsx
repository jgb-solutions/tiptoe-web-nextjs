import { FC, useState } from 'react'
import Link from 'next/link'
import clx from 'classnames'
import { useSession, signOut } from "next-auth/react"
import Image from 'next/image'
import {
  RiHome5Line,
  RiMessengerLine,
  RiAddCircleLine,
  RiCompassLine,
  RiHeartLine,
  RiHome5Fill,
  RiMessengerFill,
  RiAddCircleFill,
  RiCompassFill,
  RiHeartFill
} from 'react-icons/ri'
import { Routes } from 'routes'
import Logo from './Logo'

const Header: FC = () => {
  const { data: session } = useSession()
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(true)

  return (
    <div className="bg-white shadow">
      <div className="max-w-4xl mx-auto relative flex items-center justify-between py-3">
        <Logo blue height={40} />

        <div className="flex items-center">
          <Link href={Routes.settings}><a><RiHome5Line size={30} className="mr-4" /></a></Link>
          <Link href={Routes.settings}><a><RiMessengerLine size={30} className="mr-4" /></a></Link>
          <Link href={Routes.settings}><a><RiAddCircleLine size={30} className="mr-4" /></a></Link>
          <Link href={Routes.settings}><a><RiCompassLine size={30} className="mr-4" /></a></Link>
          <Link href={Routes.settings}><a><RiHeartLine size={30} className="mr-4" /></a></Link>
          <button
            className="w-7 h-7 rounded-full border-2 relative overflow-hidden"
            onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}>
            <Image src="/assets/images/jgb.jpeg" layout="fill" />
          </button>
        </div>

        <div className={clx("absolute top-full right-0 bg-white shadow w-60 rounded-lg text-sm", {
          "hidden": !isProfileMenuOpen
        })}>
          <ul>
            <li>
              <Link href={Routes.profile}><a className="py-2 block hover:bg-gray pl-4 pr-8">Profile</a></Link>
            </li>
            <li>
              <Link href={Routes.settings}><a className="py-2 block hover:bg-gray pl-4 pr-8">Settings</a></Link>
            </li>
          </ul>

          <span
            role="button"
            className="border-t border-green-900 border-opacity-30 pl-4 pr-8 block w-full py-2 cursor-pointer hover:bg-gray"
            onClick={() => signOut()}>Log Out</span>
        </div>
      </div>
    </div>
  )
}

export default Header