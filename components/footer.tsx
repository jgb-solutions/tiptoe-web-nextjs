import Image from 'next/image'
import Link from 'next/link'

import { Colors } from '../utils/theme'
import Newsletter from "./Newsletter"
import { logo } from './header'

const Footer = () => (
  <>

    <div>
      <div>
        {/* <div>Join Tiptoe Newsletter</div>
        <div>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra... </div>
        <div> */}
        {/* <Newsletter /> */}

        {/* <form action="/api/subscribe" method="POST">
            <div placeholder="Your email here" name="email" type="email" style={{ width: '80%' }} />
            <div style={{ width: '18%', marginTop: isTabletOrMobileDevice && '30px' }}>Send</div>
            </form> */}

        {/* </div> */}
      </div>
    </div>

    {/* <footer className="bg-black">
      <div>
        <div>
          <Link href='/'>
            <Image src={logo} />
          </Link>
        </div>

        <div>
          <Link href='/terms-condition'>
            <div color={`#fff`}>
              Terms & Condition
            </div>
          </Link>
        </div>
      </div>

      <div>
        <div>
          © Andre G. Holdings LLC {new Date().getFullYear()}
        </div>
      </div>
    </footer> */}
  </>
)

export default Footer