import HomeStyle from '../styles/style';
import Link from 'next/link'

const Footer = (props) => {
  const { theme } = props;

  console.log(props)

  return <>
    <HomeStyle.SectionBox backgroundColor={theme?.colors.tundora} large id="download">
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
    <HomeStyle.SectionBox backgroundColor={'#010101'} large>
      <HomeStyle.Block flex direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
        <HomeStyle.Block flex direction={'column'} alignItems={'center'}>
          <Link href='/'>
            <HomeStyle.LogoBox >
              <HomeStyle.Logo src="/images/logo.png" />
            </HomeStyle.LogoBox>
          </Link>
        </HomeStyle.Block>

        <HomeStyle.Block flex direction={'column'} alignItems={'center'}>
          <Link href='/terms-condition'>
            <HomeStyle.Paragraph color={`#fff`} pointer>
              Terms & Condition
            </HomeStyle.Paragraph>
          </Link>
        </HomeStyle.Block>
      </HomeStyle.Block>

      <HomeStyle.Block flex direction={'row'} alignItems={'center'} justifyContent={'center'}>
        <HomeStyle.Paragraph color={`#fff`} pointer>
          © Andre G. Holdings LLC 2020
    </HomeStyle.Paragraph>
      </HomeStyle.Block>
    </HomeStyle.SectionBox>
  </>
}

export default Footer;