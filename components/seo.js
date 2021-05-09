import React from 'react'
import Head from 'next/head'

import { DOMAIN, FB_APP_ID, APP_NAME, TWITTER_HANDLE } from '../utils/constants'

export default function SEO({ title, url, description, type, image, imageWidth, imageHeight }) {
  const titleContent = `${APP_NAME} - ${title}`
  const descriptionContent = description || `
      With the rising popularity of foot models in the adult industry, we would love to introduce you to ${APP_NAME}. Being that the entire world is now using social media to showcase their talents, ${APP_NAME} is providing a platform designed for foot models who are looking to add an additional stream of income..
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