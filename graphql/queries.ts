import { gql } from "apollo-server-core"

export const FETCH_HOME_SCREEN = gql`
	query homescreenData($page: Int, $take: Int, $orderBy: [OrderByClause!]) {
		modeles(page: $page, first: $take, orderBy: $orderBy) {
			data {
				id
				hash
				poster
				stage_name
			}
		}

		photos(page: $page, first: $take, orderBy: $orderBy) {
			data {
				id
				hash
				caption
				uri
				bucket
				type
				likes_count
				liked_by_me
				for_my_modele
				created_at
				modele {
					stage_name
					hash
					poster
				}
			}
		}
	}
`

export const FETCH_PHOTOS = gql`
	query photoData($page: Int, $first: Int, $orderBy: [OrderByClause!]) {
		photos(page: $page, first: $first, orderBy: $orderBy) {
			data {
				id
				uri
				bucket
				type
				modele {
					stage_name
					poster
					hash
				}

				likes_count
				liked_by_me
				is_for_me
				for_my_modele
				category {
					name
				}
			}
			paginatorInfo {
				currentPage
				lastPage
			}
		}
	}
`

export const UPLOAD_URL_QUERY = gql`
	query getUploadUrl($input: UploadUrlInput!) {
		uploadUrl(input: $input) {
			signedUrl
			filename
		}
	}
`

export const FETCH_FAVORITE_PHOTOS = gql`
	query favoritePhotosData(
		$page: Int
		$first: Int
		$orderBy: [OrderByClause!]
	) {
		favoritePhoto(page: $page, first: $first, orderBy: $orderBy) {
			data {
				id
				uri
				bucket
				type
				hash
				caption
				created_at
				modele {
					id
					hash
					stage_name
					poster
				}
				likes_count
				liked_by_me
				# is_for_me
			}
		}
	}
`

export const FETCH_MODELS = gql`
	query modeles($page: Int, $take: Int, $orderBy: [OrderByClause!]) {
		modeles(page: $page, first: $take, orderBy: $orderBy) {
			data {
				id
				stage_name
				poster
				hash
				followed_by_me
				followers {
					id
					name
				}
			}
			paginatorInfo {
				currentPage
				lastPage
			}
		}
	}
`

export const FETCH_MODEL = gql`
	query modelDetail($hash: String) {
		modele(hash: $hash) {
			id
			stage_name
			poster
			facebook
			hash
			instagram
			followed_by_me
			new_follower_count
			photos {
				id
				uri
				bucket
				type
				likes_count
				liked_by_me
			}
			followers {
				id
				name
				is_new
			}
		}

		getModelPrice(hash: $hash) {
			price_id
			cost
		}
	}
`

export const FETCH_CATEGORIES = gql`
	query categories {
		categories {
			id
			name
			slug
		}
	}
`

export const FETCH_ROOMS = gql`
	query roomsData {
		me {
			rooms {
				id
				created_at
				messages {
					text
				}
				chatUser {
					id
					name
					avatar
					type
					modelHash
				}
			}
		}
	}
`

export const FETCH_DOWNLOAD_URL = gql`
	query download($input: DownloadInput!) {
		download(input: $input) {
			url
		}
	}
`

export const SEARCH_QUERY = gql`
	query search($query: String!) {
		search(query: $query) {
			tracks {
				hash
				title
				poster
				artist {
					hash
					stage_name
				}
			}
			artists {
				hash
				stage_name
				poster
			}
			albums {
				hash
				title
				cover_url
				artist {
					hash
					stage_name
				}
			}
		}
	}
`

export const FACEBOOK_LOGIN_URL = gql`
	query facebookLoginUrl {
		facebookLoginUrl {
			url
		}
	}
`

export const GETPUBLISHABLEKEY = gql`
	query getPublishableKey {
		getPublishableKey {
			key
		}
	}
`

export const CREATE_PAYMENT_INTENT = gql`
	query createPaymentIntent {
		createPaymentIntent {
			client_secret
		}
	}
`

export const BILLING = gql`
	query billingInformation {
		myCards {
			id
			last4
			brand
			exp_month
			exp_year
		}

		myInvoices {
			id
			amount_paid
			created
			hosted_invoice_url
		}
	}
`
export const GET_MODEL_PRICE = gql`
	query modelInformation($hash: String) {
		getModelPrice(hash: $hash) {
			price_id
			cost
		}
	}
`
export const FETCH_MY_MODELS = gql`
	query {
		fetchMyModels {
			id
			stage_name
			hash
			poster
		}
	}
`
export const FETCH_MY_FOLLOWERS = gql`
	query {
		fetchMyFollowers {
			id
			name
			avatar
			created_at
		}
	}
`
export const VERIFY_EMAIL = gql`
  query verifyEmail($email: String) {
    verifyEmail(email: $email) {
      message
    }
  }
`
export const VERIFY_CODE = gql`
  query verifyCode($input: CodeVerificationInput) {
    verifyCode(input: $input) {
      success
    }
  }
`
