import { FC } from 'react'
import Image from 'next/image'

import SEO from '../components/seo'

import mascotLady from '../public/images/lady-website.png'
import logo from '../public/images/logo2.png'

type Props = {
  title?: string
}

const Header: FC<Props> = ({ title }) => (
  <>
    <SEO title={title} />

    <section className="bg-black">
      <header className="mx-auto md:max-w-3xl md:flex md:flex-row-reverse items-center justify-between pt-24 pb-24">
        <div className="text-white text-center mb-12">
          <div className="">
            <Image src={logo} height={50} width="150" />
          </div>
          <h2 className="text-4xl font-bold uppercase mb-2">Welcome to TipToe</h2>
          <h4 className="text-lg mb-8 text-nightshadz italic">HOME OF THE Fxxx#@B</h4>

          <a href='#download' className="p-4 border-2 font-bold uppercase text-sm border-white rounded-3xl">
            Download the app
          </a>
        </div>

        <div className="text-center">
          <Image src={mascotLady} width={300} height={288.56} />
        </div>
      </header>
    </section>
  </>
)

export default Header