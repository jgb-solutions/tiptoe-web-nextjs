export const SMALL_SCREEN_SIZE = 768
export const APP_NAME = `TipXToe`
export const FB_APP_ID = `232624100615967`
export const TWITTER_HANDLE = `tiptoe`
export const API_URL = process.env.API_URL || `/api`

export const DOMAIN = process.env.REACT_APP_DOMAIN || `https://tiptoe.app`

export const GRAPHQL_API_URL = `${API_URL}/graphql`

export const SOCKET_EVENTS = {
  SHOW_TOAST: "show_toast",
  NEW_MESSAGE: "new_message",
}

export const SUBSCRIPTION_TOPICS = {
  PHOTO_UNLIKED: "photo_unliked",
  NEW_PHOTO: "new_photo",
}

export const HOMEPAGE_PER_PAGE_NUMBER = 12
export const FETCH_PHOTOS_NUMBER = 24
export const FETCH_MODELS_NUMBER = 24
export const FETCH_FAVORITE_PHOTOS_NUMBER = 24
export const DEFAULT_AVATAR =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Info_Simple_bw.svg/1024px-Info_Simple_bw.svg.png"

export const DEFAULT_IMAGE = require("../public/assets/images/default-image.png")