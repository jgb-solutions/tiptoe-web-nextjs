import Head from 'next/head';
import Style from '../styles/style';
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

    <Style.SectionBox headerBox large>
        <Style.LogoBox >
          <Style.Logo src="/images/logo.png" />
        </Style.LogoBox>

        <Style.Block flex direction={'row'} justifyContent={'space-between'}>
          <Style.Block flex direction={'column'} alignItems={'center'}>
            <Style.Poster src="/images/bg-top.png" />
          </Style.Block>

          <Style.Block flex direction={'column'} alignItems={'center'}>
            <Style.Title color={'#fff'} textAlign={'center'} >Welcome to TipToe</Style.Title>
            <Style.Paragraph marginTop={'-10px'} color={'#fff'}>The slogan goes here</Style.Paragraph>

            <AnchorLink href='#download'>
              <Style.DownloadButton>
                Download the app
              </Style.DownloadButton>
            </AnchorLink>
          </Style.Block>
        </Style.Block>
      </Style.SectionBox>
  </>)
}

export default Header;