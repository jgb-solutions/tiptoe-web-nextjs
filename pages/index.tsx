import { FormEvent, useState } from 'react'
import Image from 'next/image'
import { NextPage } from 'next'

import Header from '../components/header'
import Footer from '../components/footer'

// import screen1 from '../public/images/screen1.jpg'
// import screen2 from '../public/images/screen2.jpg'
// import screen3 from '../public/images/screen3.jpg'
import section2Image from '../public/images/bg7.jpg'
import section3Image from '../public/images/bg5.jpg'
import section1Image from '../public/images/show1.jpg'
import section4Image from '../public/images/bg9.jpg'
import appImage from "../public/images/app.png"
import playImage from "../public/images/play.png"
import downloadImage from "../public/images/dImage.jpg"

const Homepage: NextPage = () => {
  const [email, setEmail] = useState<string>()
  const [error, setError] = useState<string>()
  const [isLoading, setIsLoading] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscription = async (event: FormEvent) => {
    event.preventDefault()

    setError("")

    if (!email) {
      setError("Please enter your email!")

      return
    }

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        body: JSON.stringify({ email })
      })
    } catch (e) {
      setError(e.response.data.error)
    }
  }

  return (
    <>
      <Header title="Welcome" />

      <main className="max-w-3xl mx-auto py-8">
        {/* <section className="bg-white p-4 -mt-24 rounded-3xl md:grid md:grid-cols-3 md:gap-x-4 shadow-md mb-8">
          <Image src={screen1} />
          <Image src={screen2} />
          <Image src={screen3} />
        </section> */}

        {/* Welcome */}
        <section className="md:grid md:grid-cols-2 md:gap-x-3 mb-8">
          <div className="md:flex md:flex-col md:justify-center">
            <h3 className="text-3xl mb-4">Welcome to TipXToe</h3>
            <p className="mb-4 text-sm">
              With the rising popularity of foot models in the adult industry, we would love to introduce you to TIPXTOE. Being that the entire world is now using social media to showcase their talents, TIPXTOE is providing a platform designed for foot models who are looking to add an additional stream of income.
            </p>

            <p className="text-sm">
              TIPXTOE will provide individuals the platform to have fun uploading endless content while providing an opportunity for extra earnings. If you love taking pictures/ videos of your feet or simply love to show off what you were blessed with then TIPXTOE is the right place.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden">
            <Image src={section1Image} />
          </div>
        </section>

        {/* Models */}
        <section className="md:grid md:grid-cols-2 md:gap-x-3 mb-8">
          <div className="rounded-3xl overflow-hidden shadow-md">
            <Image src={section2Image} />
          </div>

          <div className="md:flex md:flex-col md:justify-center">
            <h3 className="text-3xl mb-4">Models</h3>
            <p className="mb-4 text-sm">
              The process is quite simple for any model looking to earn extra income utilizing their shared content. All you have to do is create an account with TIPXTOE that will be utilized as your platform and online business. You will have the opportunity to generate as much income as possible by promoting your account with TIPXTOE to all of your followers.
            </p>

            <p className="text-sm">
              Once your TIPXTOE account is reviewed for approval you will have the power to upload pictures, videos, or indulge in private chats with your audience (subscribers).  What is great about TIPXTOE is that we give you the option to set a monthly fee for your audience members, you will also be allowed to adjust your rates as you please.
            </p>
          </div>
        </section>

        {/* Audience */}
        <section className="md:grid md:grid-cols-2 md:gap-x-3 mb-8">
          <div className="md:flex md:flex-col md:justify-center">
            <h3 className="text-3xl mb-4">Audience</h3>
            <p className="mb-4 text-sm">
              Do you have a foot fetish? Well. TIPXTOE is here to quench your thirst!!! Our platform is designed for members who share the same passion as our models. TipXToe is where you will find the most attractive foot models showcasing the secret that lies between those toes.  I mean what's better than gorgeous feet teasing you with while you... well, we'll leave the rest up to your imagination.
            </p>

            <p className="text-sm">
              Want to become an audience member? Well. this is how it works.  for the subscribers, you will create an account that will place you as an audience member. Where you will get to choose from any model registered and pay a monthly fee to view their content. Easy right?
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden">
            <Image src={section3Image} />
          </div>
        </section>

        {/* Security */}
        <section className="md:grid md:grid-cols-2 md:gap-x-3 mb-8">
          <div className="rounded-3xl overflow-hidden shadow-md">
            <Image src={section4Image} />
          </div>

          <div className="md:flex md:flex-col md:justify-center">
            <h3 className="text-3xl mb-4">Security</h3>
            <p className="mb-4 text-sm">
              With how the internet can be a scary place we've teamed up with top professionals on keeping our platform as safe and secure as possible. Your information will not be stored on the website but a third party will have all private information encrypted and locked in a location where even we can't get to it.
            </p>

            <p className="text-sm">
              Meaning we have you in a place where you can be as free as possible when it comes to your privacy. With that being said WELCOME TO TIPXTOE.            </p>
          </div>
        </section>
      </main>

      {/* <div size={'1.5em'} >Some of our models</div>

      <div src="https://img-storage-dev.tiptoe.app/models/image-1.png" />
      <div src="https://img-storage-dev.tiptoe.app/models/image-2.png" />
      <div src="https://img-storage-dev.tiptoe.app/models/image-3.png" />
      <div src="https://img-storage-dev.tiptoe.app/models/image-4.png" />
      <div src="https://img-storage-dev.tiptoe.app/models/image-5.png" />
      <div src="https://img-storage-dev.tiptoe.app/models/image-6.png" />
      <div src="https://img-storage-dev.tiptoe.app/models/image-7.png" />
      <div src="https://img-storage-dev.tiptoe.app/models/image-8.png" />
      <div src="https://img-storage-dev.tiptoe.app/models/image-9.png" />
      <div src="https://img-storage-dev.tiptoe.app/models/image-10.png" />
      <div src="https://img-storage-dev.tiptoe.app/models/image-11.png" />
      <div src="https://img-storage-dev.tiptoe.app/models/image-12.png" />
      <div src="https://img-storage-dev.tiptoe.app/models/image-13.png" />
      <div src="https://img-storage-dev.tiptoe.app/models/image-14.png" />
      <div src="https://img-storage-dev.tiptoe.app/models/image-15.png" />
      <div src="https://img-storage-dev.tiptoe.app/models/image-16.png" />
      <div src="https://img-storage-dev.tiptoe.app/models/image-17.png" />
      <div src="https://img-storage-dev.tiptoe.app/models/image-18.png" />
      <div src="https://img-storage-dev.tiptoe.app/models/image-19.png" />
      <div src="https://img-storage-dev.tiptoe.app/models/image-20.png" />
      <div src="https://img-storage-dev.tiptoe.app/models/image-21.png" />
      <div src="https://img-storage-dev.tiptoe.app/models/image-22.png" />
      <div src="https://img-storage-dev.tiptoe.app/models/image-23.png" />
      <div src="https://img-storage-dev.tiptoe.app/models/image-24.png" />
      <div src="https://img-storage-dev.tiptoe.app/models/image-25.png" />
      <div src="https://img-storage-dev.tiptoe.app/models/image-26.png" />
      <div src="https://img-storage-dev.tiptoe.app/models/image-27.png" />
      <div src="https://img-storage-dev.tiptoe.app/models/image-28.png" />
      <div src="https://img-storage-dev.tiptoe.app/models/image-29.png" />
      <div src="https://img-storage-dev.tiptoe.app/models/image-30.png" />
      <div src="https://img-storage-dev.tiptoe.app/models/image-31.png" />
      <div src="https://img-storage-dev.tiptoe.app/models/image-32.png" />
      <div src="https://img-storage-dev.tiptoe.app/models/image-33.png" />
      <div src="https://img-storage-dev.tiptoe.app/models/image-34.png" />
      <div src="https://img-storage-dev.tiptoe.app/models/image-35.png" />
      <div src="https://img-storage-dev.tiptoe.app/models/image-36.png" />
      <div src="https://img-storage-dev.tiptoe.app/models/image-37.png" />
      <div src="https://img-storage-dev.tiptoe.app/models/image-38.png" />
      <div src="https://img-storage-dev.tiptoe.app/models/image-39.png" />
      <div src="https://img-storage-dev.tiptoe.app/models/image-40.png" />
      <div src="https://img-storage-dev.tiptoe.app/models/image-41.png" />
      <div src="https://img-storage-dev.tiptoe.app/models/image-42.png" /> */}

      <div id="download">
        <div className="md:grid md:grid-cols-2 bg-nightshadz text-white">
          <div className="md:flex md:flex-col md:justify-center mx-auto max-w-sm">
            <div className="mb-8">
              <h5 className="uppercase text-3xl font-bold mb-4">Get the app!</h5>
              <p className="text-lg">
                Join thousands of loyal users using <br /> the TipToe mobile app.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-3">
              <Image src={appImage} />
              <Image src={playImage} />
            </div>
          </div>

          <div>
            <Image src={downloadImage} layout="responsive" />
          </div>
        </div>
      </div>


      <div className="bg-black text-white md:grid md:grid-cols-2">
        <div>
          <Image src={downloadImage} layout="responsive" />
        </div>
        <div className="flex flex-col items-center justify-center bg-yellow-800">
          <div className="max-w-md">
            <h4 className="text-3xl font-bold uppercase mb-4 text-center">Join Tiptoe Newsletter</h4>
            <p className="text-lg mb-8 text-center">Stay up to date with everything TipToe.</p>

            <div>
              <form className="flex" onSubmit={handleSubscription}>
                <input
                  className="p-3 rounded-xl text-black"
                  placeholder="Your email here"
                  type="email"
                  style={{ width: '80%' }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                // required
                />

                <button
                  type="submit"
                  className="px-4 py-3 bg-black text-white rounded-xl font-bold ml-2 hover:bg-white hover:text-black">
                  {isLoading ? "...Loading" : "Subscribe"}
                </button>
              </form>

              <div>
                <div>{error}</div>
                {isSubscribed && (
                  <h3 className="text-green-500 text-center text-2xl font-bold">
                    Yay! We'll email the goodies soon.
                  </h3>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Homepage