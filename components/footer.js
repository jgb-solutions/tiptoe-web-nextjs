import Style from '../styles/style';
import Link from 'next/link'

const Footer = (props) => {
  const { theme } = props;

  console.log(props)

  return <>
    <Style.SectionBox backgroundColor={theme?.colors.tundora} large id="download">
      <Style.SectionBox alignCenter height={'65px'}>
        <Style.Title size={'1.5em'} color={`#fff`}>Download the app</Style.Title>
      </Style.SectionBox>

      <Style.Block flex direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
        <Style.Block flex direction={'column'} alignItems={'center'}>
          <Link href='/'>
            <Style.AppImage src="/images/app.png" />
          </Link>
        </Style.Block>

        <Style.Block flex direction={'column'} alignItems={'center'}>
          <Link href='/'>
            <Style.AppImage src="/images/play.png" />
          </Link>
        </Style.Block>

      </Style.Block>
    </Style.SectionBox>
    <Style.SectionBox backgroundColor={'#010101'} large>
      <Style.Block flex direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
        <Style.Block flex direction={'column'} alignItems={'center'}>
          <Link href='/'>
            <Style.LogoBox >
              <Style.Logo src="/images/logo.png" />
            </Style.LogoBox>
          </Link>
        </Style.Block>

        <Style.Block flex direction={'column'} alignItems={'center'}>
          <Link href='/terms-condition'>
            <Style.Paragraph color={`#fff`} pointer>
              Terms & Condition
            </Style.Paragraph>
          </Link>
        </Style.Block>
      </Style.Block>

      <Style.Block flex direction={'row'} alignItems={'center'} justifyContent={'center'}>
        <Style.Paragraph color={`#fff`} pointer>
          © Andre G. Holdings LLC 2020
    </Style.Paragraph>
      </Style.Block>
    </Style.SectionBox>
  </>
}

export default Footer;