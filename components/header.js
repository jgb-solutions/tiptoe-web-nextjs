import Head from 'next/head';
import HomeStyle from '../styles/home';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Header = () => {
  return (<>
    <Head>
      <title>Tiptoe</title>
      <link rel="icon" href="/icons/favicon.ico" />

      <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
      <link rel="manifest" href="/icons/site.webmanifest" />
    </Head>

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
  </>)
}

export default Header;