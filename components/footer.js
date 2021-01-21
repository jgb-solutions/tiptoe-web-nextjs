import HomeStyle from '../styles/home';
import Link from 'next/link'

const Footer = (props) => {
  return <HomeStyle.SectionBox backgroundColor={'#010101'} large>
    <HomeStyle.Block flex direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
      <HomeStyle.Block flex direction={'column'} alignItems={'center'}>
        <Link href='/'>
          <HomeStyle.LogoBox >
            <HomeStyle.Logo src="/images/logo.png" />
          </HomeStyle.LogoBox>
        </Link>
      </HomeStyle.Block>

      <HomeStyle.Block flex direction={'column'} alignItems={'center'}>
        <Link href='/'>
          <HomeStyle.Paragraph color={`#fff`} pointer>
            Terms & Condition
        </HomeStyle.Paragraph>
        </Link>
      </HomeStyle.Block>
    </HomeStyle.Block>

    <HomeStyle.Block flex direction={'row'} alignItems={'center'} justifyContent={'center'}>
      <HomeStyle.Paragraph color={`#fff`} pointer>
        © Company name 2021
    </HomeStyle.Paragraph>
    </HomeStyle.Block>
  </HomeStyle.SectionBox>
}

export default Footer;