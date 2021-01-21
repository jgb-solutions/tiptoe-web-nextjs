import styles from '../styles/Home.module.css';
import Header from '../components/header';
import HomeStyle from '../styles/home';
import Link from 'next/link'


const Home = (props) => {
  return (
    <HomeStyle.Container>
      <Header />
      <HomeStyle.SectionBox headerBox>
        <HomeStyle.LogoBox >
          <HomeStyle.Logo src="/images/logo.png" />
        </HomeStyle.LogoBox>
        <HomeStyle.Block flex={true} direction={'row'} justifyContent={'space-between'}>
          <HomeStyle.Block>
            <HomeStyle.Poster src="/images/bg-top.png" />
          </HomeStyle.Block>
          <HomeStyle.Block flex={true} direction={'column'} alignItems={'center'}>
            <HomeStyle.Title color={'#fff'} textAlign={'center'} >Welcome to TipToe</HomeStyle.Title>
            <HomeStyle.Paragraph marginTop={'-10px'} color={'#fff'}>The slogan goes here</HomeStyle.Paragraph>
            <Link href='/#download'>
              <HomeStyle.DownloadButton>
                Download the app
              </HomeStyle.DownloadButton>
            </Link>
          </HomeStyle.Block>
        </HomeStyle.Block>
      </HomeStyle.SectionBox>
      <HomeStyle.SectionBox backgroundColor={'#F4F4F4'}>

      </HomeStyle.SectionBox>


      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/icons/vercel.svg" alt="Vercel Logo" id="download" className={styles.logo} />
        </a>
      </footer>
    </HomeStyle.Container>
  )
}

export default Home;