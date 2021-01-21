import Header from '../components/header';
import HomeStyle from '../styles/home';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Link  from 'next/link'


const Home = (props) => {
  return (
    <HomeStyle.Container>
      <Header />

      <HomeStyle.SectionBox headerBox large>
        <HomeStyle.LogoBox >
          <HomeStyle.Logo src="/images/logo.png" />
        </HomeStyle.LogoBox>

        <HomeStyle.Block flex direction={'row'} justifyContent={'space-between'}>
          <HomeStyle.Block flex direction={'column'} alignItems={'center'}>
            <HomeStyle.Poster src="/images/bg-top.png" />
          </HomeStyle.Block>

          <HomeStyle.Block flex direction={'column'} alignItems={'center'}>
            <HomeStyle.Title color={'#fff'} textAlign={'center'} >Welcome to TipToe</HomeStyle.Title>
            <HomeStyle.Paragraph marginTop={'-10px'} color={'#fff'}>The slogan goes here</HomeStyle.Paragraph>

            <AnchorLink href='#download'>
              <HomeStyle.DownloadButton>
                Download the app
              </HomeStyle.DownloadButton>
            </AnchorLink>
          </HomeStyle.Block>
        </HomeStyle.Block>
      </HomeStyle.SectionBox>

      <HomeStyle.SectionBox backgroundColor={'#F4F4F4'} large>
        <HomeStyle.SectionBox marginTop={'-170px'} backgroundColor={'#fff'} noPadding>
          <HomeStyle.SectionBox alignCenter backgroundColor={'#F4F4F4'} height={'65px'}>
            <HomeStyle.Title size={'1.5em'} >A title goes here!</HomeStyle.Title>
          </HomeStyle.SectionBox>

          <HomeStyle.Block flex direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
            <HomeStyle.Block flex direction={'column'} alignItems={'center'}>
              <HomeStyle.Title size={'1em'} >Screen 1</HomeStyle.Title>
              <HomeStyle.Poster src="/images/screen1.jpg" />
              <HomeStyle.Paragraph >Some descriptions goes here</HomeStyle.Paragraph>
            </HomeStyle.Block>

            <HomeStyle.Block flex direction={'column'} alignItems={'center'}>
              <HomeStyle.Title size={'1em'} >Screen 2</HomeStyle.Title>
              <HomeStyle.Poster src="/images/screen2.jpg" />
              <HomeStyle.Paragraph >Some descriptions goes here</HomeStyle.Paragraph>
            </HomeStyle.Block>

            <HomeStyle.Block flex direction={'column'} alignItems={'center'}>
              <HomeStyle.Title size={'1em'} >Screen 3</HomeStyle.Title>
              <HomeStyle.Poster src="/images/screen3.jpg" />
              <HomeStyle.Paragraph >Some descriptions goes here</HomeStyle.Paragraph>
            </HomeStyle.Block>
          </HomeStyle.Block>
        </HomeStyle.SectionBox>

        <HomeStyle.SectionBox noPadding>
          <HomeStyle.Block flex direction={'row'} >
            <HomeStyle.Block width={'50%'}>
              <HomeStyle.Title size={'1.5em'} >Welcome To TipXToe</HomeStyle.Title>
              <HomeStyle.Paragraph >
                With the rising popularity of foot models in the adult industry, we would love to introduce you to TIPXTOE. Being that the entire world is now using social media to showcase their talents, TIPXTOE is providing a platform designed for foot models who are looking to add an additional stream of income. TIPXTOE will provide individuals the platform to have fun uploading endless content while providing an opportunity for extra earnings. If you love taking pictures/ videos of your feet or simply love to show off what you were blessed with then TIPXTOE is the right place.
              </HomeStyle.Paragraph>
            </HomeStyle.Block>

            <HomeStyle.Block width={'50%'}>
              <HomeStyle.Poster src="/images/bg5.jpg" />
            </HomeStyle.Block>
          </HomeStyle.Block>

          <HomeStyle.Block flex direction={'row'} >
            <HomeStyle.Block width={'50%'}>
              <HomeStyle.Poster src="/images/bg4.png" />
            </HomeStyle.Block>

            <HomeStyle.Block width={'50%'}>
              <HomeStyle.Title size={'1.5em'} >Models</HomeStyle.Title>
              <HomeStyle.Paragraph >
                The process is quite simple for any model looking to earn extra income utilizing their shared content. All you have to do is create an account with TIPXTOE that will be utilized as your platform and online business. You will have the opportunity to generate as much income as possible by promoting your account with TIPXTOE to all of your followers. Once your TIPXTOE account is reviewed for approval you will have the power to upload pictures, videos, or indulge in private chats with your audience (subscribers).  What is great about TIPXTOE is that we give you the option to set a monthly fee for your audience members, you will also be allowed to adjust your rates as you please.
              </HomeStyle.Paragraph>
            </HomeStyle.Block>
          </HomeStyle.Block>

          <HomeStyle.Block flex direction={'row'} >
            <HomeStyle.Block width={'50%'}>
              <HomeStyle.Title size={'1.5em'} >Audience</HomeStyle.Title>
              <HomeStyle.Paragraph >
                Do you have a foot fetish? Well. TIPXTOE is here to quench your thirst!!! Our platform is designed for members who share the same passion as our models. TipXToe is where you will find the most attractive foot models showcasing the secret that lies between those toes.  I mean what's better than gorgeous feet teasing you with while you... well, we'll leave the rest up to your imagination.  Want to become an audience member? Well. this is how it works.  for the subscribers, you will create an account that will place you as an audience member. Where you will get to choose from any model registered and pay a monthly fee to view their content. Easy right?
              </HomeStyle.Paragraph>
            </HomeStyle.Block>

            <HomeStyle.Block width={'50%'}>
              <HomeStyle.Poster src="/images/bg6.jpg" />
            </HomeStyle.Block>
          </HomeStyle.Block>

          <HomeStyle.Block flex direction={'row'} >
            <HomeStyle.Block width={'50%'}>
              <HomeStyle.Poster src="/images/bg.png" />
            </HomeStyle.Block>

            <HomeStyle.Block width={'50%'}>
              <HomeStyle.Title size={'1.5em'} >Security</HomeStyle.Title>
              <HomeStyle.Paragraph >
                With how the internet can be a scary place we've teamed up with top professionals on keeping our platform as safe and secure as possible. Your information will not be stored on the website but a third party will have all private information encrypted and locked in a location where even we can't get to it. Meaning we have you in a place where you can be as free as possible when it comes to your privacy. With that being said WELCOME TO TIPXTOE.
              </HomeStyle.Paragraph>
            </HomeStyle.Block>
          </HomeStyle.Block>
        </HomeStyle.SectionBox>
      </HomeStyle.SectionBox>

      <HomeStyle.SectionBox large>
        <HomeStyle.Block flex direction={'row'} >
          <HomeStyle.Block width={'50%'}>
            <HomeStyle.Title size={'1.5em'} >About to TipXToe</HomeStyle.Title>
            <HomeStyle.Paragraph >
              With the rising popularity of Foot Models in the adult industry, we present to you TipXToe. The whole world is now using social media to showcase talent as well as hobbies that turn into income for those looking for extra earnings. If you take random pictures of your feet that you love to share or simply like to show off what you were blessed with TipXToe is the place for you.
            </HomeStyle.Paragraph>
          </HomeStyle.Block>

          <HomeStyle.Block width={'50%'}>
            <HomeStyle.Title size={'1.5em'} >Models</HomeStyle.Title>
            <HomeStyle.Paragraph >
              The process is quite simple for models looking to earn extra income using their shared content. You will create an account that will be your platform and online business. Once your account is approved, you will have the power to upload pictures, videos, or chat with your audience (subscribers) privately. As a model, you have the opportunity to generate as much income as possible by promoting your TipXToe profile. You will also have the option to set a monthly fee for your audience that can be adjusted as you please.
            </HomeStyle.Paragraph>
          </HomeStyle.Block>
        </HomeStyle.Block>

        <HomeStyle.Block flex direction={'row'} >
          <HomeStyle.Block width={'50%'}>
            <HomeStyle.Title size={'1.5em'} >Audience</HomeStyle.Title>
            <HomeStyle.Paragraph >
              For those who share the same passion as our foot models, TipXToe is where you will find the most attractive models showcasing the secret that lies within the adult industry. I mean what is better than a gorgeous woman teasing you with her feet while you... yeah, we'll leave that up to your imagination. As a subscriber, you will create an account that will place you as an audience member. Audience members will subscribe to their models of choice and pay a monthly fee to view their content. Easy right?
            </HomeStyle.Paragraph>
          </HomeStyle.Block>

          <HomeStyle.Block width={'50%'}>
            <HomeStyle.Title size={'1.5em'} >Security</HomeStyle.Title>
            <HomeStyle.Paragraph >
              We know the internet can be a scary place, we've teamed up with top professionals to keep our platform as safe and secure as possible. TipXToe will not store your personal information on the website, our PCI processor will keep your private information encrypted and securely locked. Meaning you are in a place where you can be as free as possible when it comes to your privacy. With that being said WELCOME TO TIPXTOE!
            </HomeStyle.Paragraph>
          </HomeStyle.Block>
        </HomeStyle.Block>
      </HomeStyle.SectionBox>

      <HomeStyle.SectionBox backgroundColor={'#F4F4F4'} large>
        <HomeStyle.SectionBox alignCenter backgroundColor={'#F4F4F4'} height={'65px'}>
          <HomeStyle.Title size={'1.5em'} >Some of our models</HomeStyle.Title>
        </HomeStyle.SectionBox>

        <HomeStyle.Block flex direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
          <HomeStyle.Block flex direction={'column'} alignItems={'center'}>
            <HomeStyle.Models src="https://img-storage-dev.tiptoe.app/models/image-1.png" />
          </HomeStyle.Block>

          <HomeStyle.Block flex direction={'column'} alignItems={'center'}>
            <HomeStyle.Models src="https://img-storage-dev.tiptoe.app/models/image-2.png" />
          </HomeStyle.Block>

          <HomeStyle.Block flex direction={'column'} alignItems={'center'}>
            <HomeStyle.Models src="https://img-storage-dev.tiptoe.app/models/image-3.png" />
          </HomeStyle.Block>

          <HomeStyle.Block flex direction={'column'} alignItems={'center'}>
            <HomeStyle.Models src="https://img-storage-dev.tiptoe.app/models/image-4.png" />
          </HomeStyle.Block>

          <HomeStyle.Block flex direction={'column'} alignItems={'center'}>
            <HomeStyle.Models src="https://img-storage-dev.tiptoe.app/models/image-5.png" />
          </HomeStyle.Block>

          <HomeStyle.Block flex direction={'column'} alignItems={'center'}>
            <HomeStyle.Models src="https://img-storage-dev.tiptoe.app/models/image-6.png" />
          </HomeStyle.Block>
        </HomeStyle.Block>
      </HomeStyle.SectionBox>

      <HomeStyle.SectionBox backgroundColor={props.theme.colors.tundora} large id="download">
        <HomeStyle.SectionBox alignCenter height={'65px'}>
          <HomeStyle.Title size={'1.5em'} color={`#fff`}>Download the app</HomeStyle.Title>
        </HomeStyle.SectionBox>

        <HomeStyle.Block flex direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
          <HomeStyle.Block flex direction={'column'} alignItems={'center'}>
            <Link href='/'>
              <HomeStyle.AppImage src="/images/app.png" />
            </Link>
          </HomeStyle.Block>

          <HomeStyle.Block flex direction={'column'} alignItems={'center'}>
            <Link href='/'>
              <HomeStyle.AppImage src="/images/play.png" />
            </Link>
          </HomeStyle.Block>

        </HomeStyle.Block>
      </HomeStyle.SectionBox>

      <HomeStyle.SectionBox backgroundColor={props.theme.colors.black} large>
        lkmfdlg
      </HomeStyle.SectionBox>


      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/icons/vercel.svg" alt="Vercel Logo" id="download" className={styles.logo} />
        </a>
      </footer> */}
    </HomeStyle.Container>
  )
}

export default Home;