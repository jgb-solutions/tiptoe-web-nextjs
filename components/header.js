import Head from 'next/head';
import Style from '../styles/style';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Header = (props) => {
  const { title } = props;
  return (<>
    <Head>
      <title>Tiptoe {title && title} </title>
      <link rel="icon" href="/icons/favicon.ico" />

      <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
      <link rel="manifest" href="/icons/site.webmanifest" />
    </Head>

    <Style.SectionBox headerBox large>

      <Style.Block flex direction={'row-reverse'} justifyContent={'space-between'}>


        <Style.Block flex direction={'column'} alignItems={'center'}>
          <Style.Logo src="/images/logo.png" backgroundColor={'rgba(255,255,255,0.2)'} />
          <Style.Title color={'#fff'} textAlign={'center'} >Welcome to TipToe</Style.Title>
          <Style.Paragraph marginTop={'-10px'} color={'#fff'}>The slogan goes here</Style.Paragraph>

          <AnchorLink href='#download'>
            <Style.PrimaryButton>
              Download the app
              </Style.PrimaryButton>
          </AnchorLink>
        </Style.Block>

        <Style.Block flex direction={'column'} alignItems={'center'}>
          <Style.TopImage src="/images/pic1.png" />
        </Style.Block>
      </Style.Block>
    </Style.SectionBox>
  </>)
}

export default Header;