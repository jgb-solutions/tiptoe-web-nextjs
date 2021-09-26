import Style from '../styles/style'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import SEO from '../components/seo'
import { FC } from 'react'

type Props = {
  title?: string
}

const Header: FC<Props> = (props) => {
  const { title } = props
  return (<>
    <SEO title={title} />
    <Style.SectionBox headerBox large>

      <Style.Block flex direction={'row-reverse'} justifyContent={'space-between'}>


        <Style.Block flex direction={'column'} alignItems={'center'}>
          <Style.Logo src="/images/logo2.png" />
          <Style.Title color={'#fff'} textAlign={'center'} >Welcome to TipToe</Style.Title>
          <Style.Paragraph marginTop={'-10px'} color={'#fff'}>The slogan goes here</Style.Paragraph>

          <AnchorLink href='#download'>
            <Style.PrimaryButton>
              Download the app
            </Style.PrimaryButton>
          </AnchorLink>
        </Style.Block>

        <Style.Block flex direction={'column'} alignItems={'center'}>
          <Style.TopImage src="/images/lady-website.png" />
        </Style.Block>
      </Style.Block>
    </Style.SectionBox>
  </>)
}

export default Header