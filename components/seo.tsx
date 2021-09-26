import Head from 'next/head'
import { FC } from 'react'

import { DOMAIN, FB_APP_ID, APP_NAME, TWITTER_HANDLE } from '../utils/constants'

type Props = {
  title?: string
  url?: string
  description?: string
  type?: string
  image?: string
  imageWidth?: number
  imageHeight?: number
}

const SEO: FC<Props> = ({ title, url, description, type, image, imageWidth, imageHeight }) => {
  const titleContent = `${APP_NAME} - ${title}`
  const descriptionContent = description || `
      ${APP_NAME} By continuing to use our Website, you acknowledge that you have had the chance to review and
      consider this Privacy Policy, and you acknowledge that you agree to it. This means that you also consent
      to the use of your information and the method of disclosure as described in this Privacy Policy. If you
      do not understand the Privacy Policy or do not agree to it, then you agree to immediately cease your use
      of our Website.
  `
  const imageContent = image || `https://tiptoe.app/images/logo.png`

  return (
    <>
      <Head>
        <meta property="og:title" content={titleContent} key="title" />
        <meta property="og:site_name" content={APP_NAME} key="site_name" />
        <meta property="og:url" content={url || DOMAIN} key="url" />
        <meta property="og:description" content={descriptionContent.replace(/(<([^>]+)>)/ig, "")} key="description" />
        <meta property="og:type" content={type || "website"} key="type" />

        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <meta property="og:image" content={imageContent} key="image" />

        {imageWidth && <meta property="og:image:width" content={`${imageWidth}`} key="image_width" />}
        {imageHeight && <meta property="og:image:height" content={`${imageHeight}`} key="image_height" />}

        <meta property="fb:app_id" content={FB_APP_ID} key="fb_app_id" />

        <meta name="twitter:card" content="summary" key="twitter_card" />
        <meta name="twitter:site" content={`@${TWITTER_HANDLE}`} key="twitter_site" />
        {imageContent && <meta name="twitter:image" content={imageContent} key="twitter_image" />}
        <meta name="twitter:title" content={titleContent} key="twitter_title " />
        <meta name="twitter:description" content={descriptionContent.replace(/(<([^>]+)>)/ig, "")} key="twitter_description" />

        <title>{titleContent}</title>
      </Head>
    </>
  )
}

export default SEO