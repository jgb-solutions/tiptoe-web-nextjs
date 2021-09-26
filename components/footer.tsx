import Image from 'next/image'
import Link from 'next/link'

import { Colors } from '../utils/theme'
import Newsletter from "./Newsletter"

const Footer = () => (
  <>
    <div id="download">
      <div>
        <div>
          <div >
            <div>
              <div>Get the app!</div>
              <div>
                Join thousands of loyal users using the TipToe mobile app
              </div>
            </div>
            <div>
              <Image src="/images/app.png" />
              <Image src="/images/play.png" />
            </div>
          </div>

        </div>

        <div>
          <Image src="/images/dImage.jpg" />
        </div>

      </div>
    </div>

    <div>
      <div>
        <div>Join Tiptoe Newsletter</div>
        <div>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra... </div>
        <div>
          <Newsletter />
          {/* <form action="/api/subscribe" method="POST">
            <div placeholder="Your email here" name="email" type="email" style={{ width: '80%' }} />
            <div style={{ width: '18%', marginTop: isTabletOrMobileDevice && '30px' }}>Send</div>
            </form> */}
        </div>
      </div>
    </div>
    <div>
      <div>
        <div>
          <Link href='/'>
            <Image src="/images/logo.png" />
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


    </div>
  </>
)

export default Footer