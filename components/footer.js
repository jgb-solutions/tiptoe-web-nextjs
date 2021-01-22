import Style from '../styles/style';
import Link from 'next/link'

const Footer = (props) => {
  const { theme } = props;

  console.log(props)

  return <>
    <Style.SectionBox backgroundColor={theme?.colors.nightshadz} large id="download">
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
    <Style.SectionBox borderTop={`#fff`} backgroundColor={'#010101'} large>
      <Style.Block flex direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
        <Style.Block flex direction={'column'} alignItems={'left'} justifyContent={'flex-start'}>
          <Link href='/'>
            <Style.Logo src="/images/logo.png" />
          </Link>

          <Style.Paragraph color={`#fff`} pointer>
            © Andre G. Holdings LLC {(new Date).getFullYear()}
          </Style.Paragraph>
        </Style.Block>

        <Style.Block flex direction={'column'} alignItems={'right'} justifyContent={'flex-end'} >
          <Style.Title size={'1.2em'} color={`#fff`}>Join Tiptoe Newsletter</Style.Title>
          <Style.Input placeholder="Your email here" />
          <Link href='/terms-condition'>
            <Style.Paragraph color={`#fff`} pointer>
              Terms & Condition
            </Style.Paragraph>
          </Link>
        </Style.Block>
      </Style.Block>
    </Style.SectionBox>
  </>
}

export default Footer;