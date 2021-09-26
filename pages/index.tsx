import { CarouselProvider, Slider, Slide } from 'pure-react-carousel'
import { useMediaQuery } from 'react-responsive'

import Header from '../components/header'
import Style from '../styles/style'
import Footer from '../components/footer'
import theme from '../utils/theme'
import { NextPage } from 'next'


const Homepage: NextPage = (props) => {
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1100px)",
  })

  return (
    <>
      <Style.Container>
        <Header title="Welcome" />
        <Style.SectionBox backgroundColor={theme.colors.gray} large>
          <Style.SectionBox marginBottom={'30px'} marginTop={isTabletOrMobileDevice ? '-10px' : '-165px'} shadow backgroundColor={'#fff'} noPadding rounded>

            <Style.Block flex direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
              <Style.Block flex direction={'column'} alignItems={'center'}>
                <Style.Poster src="/images/screen1.jpg" />
              </Style.Block>

              <Style.Block flex direction={'column'} alignItems={'center'}>
                <Style.Poster src="/images/screen2.jpg" />
              </Style.Block>

              <Style.Block flex direction={'column'} alignItems={'center'}>
                <Style.Poster src="/images/screen3.jpg" />
              </Style.Block>
            </Style.Block>
          </Style.SectionBox>

          <Style.SectionBox noPadding>
            <Style.Block marginButtom shadow flex direction={'row'} justifyContent={'center'}>
              <Style.Block width={'50%'} flex direction={'column'} justifyContent={'center'}>
                <Style.Title size={'1.5em'} >Welcome To TipXToe</Style.Title>
                <Style.Paragraph textAlign={'justify'}>
                  With the rising popularity of foot models in the adult industry, we would love to introduce you to TIPXTOE. Being that the entire world is now using social media to showcase their talents, TIPXTOE is providing a platform designed for foot models who are looking to add an additional stream of income.
                </Style.Paragraph>
                <Style.Paragraph textAlign={'justify'}>
                  TIPXTOE will provide individuals the platform to have fun uploading endless content while providing an opportunity for extra earnings. If you love taking pictures/ videos of your feet or simply love to show off what you were blessed with then TIPXTOE is the right place.
                </Style.Paragraph>
              </Style.Block>

              <Style.Block width={'50%'}>
                <Style.Poster src="/images/show1.jpg" />
              </Style.Block>
            </Style.Block>

            <Style.Block marginButtom shadow flex direction={'row'} justifyContent={'center'}>
              <Style.Block width={'50%'}>
                <Style.Poster src="/images/bg7.jpg" />
              </Style.Block>

              <Style.Block width={'50%'} flex direction={'column'} justifyContent={'center'}>
                <Style.Title size={'1.5em'} >Models</Style.Title>
                <Style.Paragraph textAlign={'justify'}>
                  The process is quite simple for any model looking to earn extra income utilizing their shared content. All you have to do is create an account with TIPXTOE that will be utilized as your platform and online business. You will have the opportunity to generate as much income as possible by promoting your account with TIPXTOE to all of your followers.
                </Style.Paragraph>
                <Style.Paragraph textAlign={'justify'}>
                  Once your TIPXTOE account is reviewed for approval you will have the power to upload pictures, videos, or indulge in private chats with your audience (subscribers).  What is great about TIPXTOE is that we give you the option to set a monthly fee for your audience members, you will also be allowed to adjust your rates as you please.
                </Style.Paragraph>
              </Style.Block>
            </Style.Block>

            <Style.Block marginButtom shadow flex direction={'row'} justifyContent={'center'}>
              <Style.Block width={'50%'} flex direction={'column'} justifyContent={'center'}>
                <Style.Title size={'1.5em'} >Audience</Style.Title>
                <Style.Paragraph textAlign={'justify'}>
                  Do you have a foot fetish? Well. TIPXTOE is here to quench your thirst!!! Our platform is designed for members who share the same passion as our models. TipXToe is where you will find the most attractive foot models showcasing the secret that lies between those toes.  I mean what's better than gorgeous feet teasing you with while you... well, we'll leave the rest up to your imagination.
                </Style.Paragraph>
                <Style.Paragraph textAlign={'justify'}>
                  Want to become an audience member? Well. this is how it works.  for the subscribers, you will create an account that will place you as an audience member. Where you will get to choose from any model registered and pay a monthly fee to view their content. Easy right?
                </Style.Paragraph>
              </Style.Block>

              <Style.Block width={'50%'} >
                <Style.Poster src="/images/bg5.jpg" />
              </Style.Block>
            </Style.Block>

            <Style.Block marginButtom shadow flex direction={'row'} justifyContent={'center'}>
              <Style.Block width={'50%'}>
                <Style.Poster src="/images/bg9.jpg" />
              </Style.Block>

              <Style.Block width={'50%'} flex direction={'column'} justifyContent={'center'}>
                <Style.Title size={'1.5em'} >Security</Style.Title>
                <Style.Paragraph textAlign={'justify'}>
                  With how the internet can be a scary place we've teamed up with top professionals on keeping our platform as safe and secure as possible. Your information will not be stored on the website but a third party will have all private information encrypted and locked in a location where even we can't get to it.
                </Style.Paragraph>
                <Style.Paragraph textAlign={'justify'}>Meaning we have you in a place where you can be as free as possible when it comes to your privacy. With that being said WELCOME TO TIPXTOE.
                </Style.Paragraph>
              </Style.Block>
            </Style.Block>
          </Style.SectionBox>
        </Style.SectionBox>

        <Style.SectionBox large>
          <Style.Block flex direction={'row'} noPadding>
            <Style.Block width={'50%'}>
              <Style.Title size={'1.5em'} >About to TipXToe</Style.Title>
              <Style.Paragraph textAlign={'justify'}>
                With the rising popularity of Foot Models in the adult industry, we present to you TipXToe. The whole world is now using social media to showcase talent as well as hobbies that turn into income for those looking for extra earnings. If you take random pictures of your feet that you love to share or simply like to show off what you were blessed with TipXToe is the place for you.
              </Style.Paragraph>
            </Style.Block>

            <Style.Block width={'50%'}>
              <Style.Title size={'1.5em'} >Models</Style.Title>
              <Style.Paragraph textAlign={'justify'}>
                The process is quite simple for models looking to earn extra income using their shared content. You will create an account that will be your platform and online business. Once your account is approved, you will have the power to upload pictures, videos, or chat with your audience (subscribers) privately. As a model, you have the opportunity to generate as much income as possible by promoting your TipXToe profile. You will also have the option to set a monthly fee for your audience that can be adjusted as you please.
              </Style.Paragraph>
            </Style.Block>
          </Style.Block>

          <Style.Block flex direction={'row'} noPadding>
            <Style.Block width={'50%'}>
              <Style.Title size={'1.5em'} >Audience</Style.Title>
              <Style.Paragraph textAlign={'justify'}>
                For those who share the same passion as our foot models, TipXToe is where you will find the most attractive models showcasing the secret that lies within the adult industry. I mean what is better than a gorgeous woman teasing you with her feet while you... yeah, we'll leave that up to your imagination. As a subscriber, you will create an account that will place you as an audience member. Audience members will subscribe to their models of choice and pay a monthly fee to view their content. Easy right?
              </Style.Paragraph>
            </Style.Block>

            <Style.Block width={'50%'}>
              <Style.Title size={'1.5em'} >Security</Style.Title>
              <Style.Paragraph textAlign={'justify'}>
                We know the internet can be a scary place, we've teamed up with top professionals to keep our platform as safe and secure as possible. TipXToe will not store your personal information on the website, our PCI processor will keep your private information encrypted and securely locked. Meaning you are in a place where you can be as free as possible when it comes to your privacy. With that being said WELCOME TO TIPXTOE!
              </Style.Paragraph>
            </Style.Block>
          </Style.Block>
        </Style.SectionBox>

        <Style.SectionBox backgroundColor={theme.colors.gray} >
          <Style.SectionBox alignCenter backgroundColor={theme.colors.gray} height={'65px'}>
            <Style.Title size={'1.5em'} >Some of our models</Style.Title>
          </Style.SectionBox>

          <Style.Block flex direction={'row'} alignItems={'center'} justifyContent={'center'} model>
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={125}
              totalSlides={3}
              isPlaying={true}
              interval={6000}
              infinite={true}
              // @ts-ignore
              style={{ width: '100%', flexDirection: 'row' }}
            >
              <Slider style={{ height: '130px' }}>
                <Slide index={0} style={{ display: 'flex', flexDirection: 'space-between' }}>
                  <Style.Models src="https://img-storage-dev.tiptoe.app/models/image-1.png" />
                  <Style.Models src="https://img-storage-dev.tiptoe.app/models/image-2.png" />
                  <Style.Models src="https://img-storage-dev.tiptoe.app/models/image-3.png" />
                  <Style.Models src="https://img-storage-dev.tiptoe.app/models/image-4.png" />
                  <Style.Models src="https://img-storage-dev.tiptoe.app/models/image-5.png" />
                  <Style.Models src="https://img-storage-dev.tiptoe.app/models/image-6.png" />
                  <Style.Models src="https://img-storage-dev.tiptoe.app/models/image-7.png" />
                  <Style.Models src="https://img-storage-dev.tiptoe.app/models/image-8.png" />
                  <Style.Models src="https://img-storage-dev.tiptoe.app/models/image-9.png" />
                  <Style.Models src="https://img-storage-dev.tiptoe.app/models/image-10.png" />
                  <Style.Models src="https://img-storage-dev.tiptoe.app/models/image-11.png" />
                  <Style.Models src="https://img-storage-dev.tiptoe.app/models/image-12.png" />
                  <Style.Models src="https://img-storage-dev.tiptoe.app/models/image-13.png" />
                  <Style.Models src="https://img-storage-dev.tiptoe.app/models/image-14.png" />
                </Slide>
                <Slide index={1} style={{ display: 'flex', flexDirection: 'space-between' }}>
                  <Style.Models src="https://img-storage-dev.tiptoe.app/models/image-15.png" />
                  <Style.Models src="https://img-storage-dev.tiptoe.app/models/image-16.png" />
                  <Style.Models src="https://img-storage-dev.tiptoe.app/models/image-17.png" />
                  <Style.Models src="https://img-storage-dev.tiptoe.app/models/image-18.png" />
                  <Style.Models src="https://img-storage-dev.tiptoe.app/models/image-19.png" />
                  <Style.Models src="https://img-storage-dev.tiptoe.app/models/image-20.png" />
                  <Style.Models src="https://img-storage-dev.tiptoe.app/models/image-21.png" />
                  <Style.Models src="https://img-storage-dev.tiptoe.app/models/image-22.png" />
                  <Style.Models src="https://img-storage-dev.tiptoe.app/models/image-23.png" />
                  <Style.Models src="https://img-storage-dev.tiptoe.app/models/image-24.png" />
                  <Style.Models src="https://img-storage-dev.tiptoe.app/models/image-25.png" />
                  <Style.Models src="https://img-storage-dev.tiptoe.app/models/image-26.png" />
                  <Style.Models src="https://img-storage-dev.tiptoe.app/models/image-27.png" />
                  <Style.Models src="https://img-storage-dev.tiptoe.app/models/image-28.png" />
                </Slide>
                <Slide index={2} style={{ display: 'flex', flexDirection: 'space-between' }}>
                  <Style.Models src="https://img-storage-dev.tiptoe.app/models/image-29.png" />
                  <Style.Models src="https://img-storage-dev.tiptoe.app/models/image-30.png" />
                  <Style.Models src="https://img-storage-dev.tiptoe.app/models/image-31.png" />
                  <Style.Models src="https://img-storage-dev.tiptoe.app/models/image-32.png" />
                  <Style.Models src="https://img-storage-dev.tiptoe.app/models/image-33.png" />
                  <Style.Models src="https://img-storage-dev.tiptoe.app/models/image-34.png" />
                  <Style.Models src="https://img-storage-dev.tiptoe.app/models/image-35.png" />
                  <Style.Models src="https://img-storage-dev.tiptoe.app/models/image-36.png" />
                  <Style.Models src="https://img-storage-dev.tiptoe.app/models/image-37.png" />
                  <Style.Models src="https://img-storage-dev.tiptoe.app/models/image-38.png" />
                  <Style.Models src="https://img-storage-dev.tiptoe.app/models/image-39.png" />
                  <Style.Models src="https://img-storage-dev.tiptoe.app/models/image-40.png" />
                  <Style.Models src="https://img-storage-dev.tiptoe.app/models/image-41.png" />
                  <Style.Models src="https://img-storage-dev.tiptoe.app/models/image-42.png" />
                </Slide>
              </Slider>
            </CarouselProvider>

          </Style.Block>
        </Style.SectionBox>
        <Footer theme={theme} />
      </Style.Container>
    </>
  )
}
<style jsx>{`
  .slide{
    overflow-x: hidden;
    overflow-y: hidden;
  }
`}
</style>

export default Homepage