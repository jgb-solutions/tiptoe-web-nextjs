import Style from '../styles/style';
import Link from 'next/link'
import { useMediaQuery } from 'react-responsive'

const Footer = (props) => {
  const { theme } = props;

  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1100px)",
  });

  return <>
    <Style.SectionBox style={{ marginBottom: isTabletOrMobileDevice && '30px' }} backgroundColor={theme?.colors.nightshadz} downloadBox noPadding id="download">
      <Style.Block flex direction={'row'} noPadding justifyContent={'space-between'}>
        <Style.Block large withPadding width={'40%'} flex direction={'column'} alignItems={'center'} justifyContent={'center'}>
          <Style.Block >
            <Style.Block flex direction={'column'} justifyContent={isTabletOrMobileDevice ? 'center' : 'flex-start'}>
              <Style.Title size={'1.5em'} color={'#fff'}>Get the app!</Style.Title>
              <Style.Paragraph color={'#fff'} marginTop={'0px'}>
                Join thousands of loyal users using the TipToe mobile app
              </Style.Paragraph>
            </Style.Block>
            <Style.Block flex direction={'row'} justifyContent={''}>
              <Style.AppImage src="/images/app.png" marginRignt />
              <Style.AppImage src="/images/play.png" />
            </Style.Block>
          </Style.Block>

        </Style.Block>

        <Style.Block width={'50%'} flex direction={'row-reverse'} noPadding>
          <Style.DImage src="/images/dImage.jpg" />
        </Style.Block>

      </Style.Block>
    </Style.SectionBox>

    <Style.SectionBox backgroundColor={props.theme.colors.gray} large>
      <Style.Block flex direction={'column'} alignItems={''} justifyContent={'center'}>
        <Style.Title size={'1.2em'} color={``}>Join Tiptoe Newsletter</Style.Title>
        <Style.Paragraph marginTop={'0px'}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra... </Style.Paragraph>
        <Style.Block noPadding flex direction={isTabletOrMobileDevice ? 'column' : 'row'} justifyContent={'space-around'}>
          <Style.Input placeholder="Your email here" style={{ width: '80%' }} />
          <Style.SecondaryButton style={{ width: '18%', marginTop: isTabletOrMobileDevice && '30px' }}>Send</Style.SecondaryButton>
        </Style.Block>
      </Style.Block>
    </Style.SectionBox>
    <Style.SectionBox backgroundColor={'#010101'} large>
      <Style.Block flex direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
        <Style.Block flex direction={'column'} alignItems={'left'} justifyContent={'flex-start'}>
          <Link href='/'>
            <Style.Logo src="/images/logo.png" backgroundColor={'rgba(255,255,255,0.1)'} />
          </Link>
        </Style.Block>

        <Style.Block flex direction={'column'} alignItems={'right'} justifyContent={'flex-end'} >

          <Link href='/terms-condition'>
            <Style.Paragraph color={`#fff`} pointer>
              Terms & Condition
            </Style.Paragraph>
          </Link>
        </Style.Block>
      </Style.Block>

      <Style.Block flex direction={'row'} alignItems={'center'} justifyContent={'center'}>
        <Style.Paragraph color={`#fff`} pointer>
          © Andre G. Holdings LLC { new Date().getFullYear() }
        </Style.Paragraph>
      </Style.Block>


    </Style.SectionBox>
  </>
}

export default Footer;