import { gql } from "apollo-server-core"

export const SIGN_USER_UP = gql`
  mutation RegisterUser($input: RegisterInput!) {
    register(input: $input) {
      tokens {
        user {
          id
          name
          email
          first_login
          avatar
          telephone
          created_at
          user_type
          is_model
          is_consumer
          gender
          modele {
            id
            stage_name
            bio
            facebook
            hash
            instagram
            twitter
            youtube
            poster
            modele_account_data {
              account
              balance
              created_at
            }
            new_follower_count
            photos_count
            followers_count
            created_at
          }
        }
        access_token
      }
    }
  }
`

export const LOG_USER_IN = gql`
  mutation logUserIn($input: LoginInput!) {
    login(input: $input) {
      access_token
      user {
        id
        active
        admin
        name
        email
        first_login
        avatar
        telephone
        created_at
        user_type
        is_model
        is_consumer
        gender
        pm_last_four
        modele {
          id
          stage_name
          bio
          facebook
          hash
          instagram
          twitter
          youtube
          poster
          modele_account_data {
            account
            balance
            created_at
          }
          new_follower_count
          photos_count
          followers_count
          created_at
        }
      }
    }
  }
`

export const VERIFY_USER_EMAIL = gql`
  mutation VerifyUserEmail($input: VerifyUserEmailInput!) {
    verifyUserEmail(input: $input) {
      exists
    }
  }
`

export const UPDATE_USER_WITH_MODEL = gql`
  mutation UpdateUserWithModel($id: ID!, $input: UpdateUserWithModelInput!) {
    updateUserWithModel(id: $id, input: $input) {
      id
      active
      admin
      name
      email
      first_login
      avatar
      telephone
      created_at
      user_type
      is_model
      is_consumer
      gender
      pm_last_four
      modele {
        id
        stage_name
        bio
        facebook
        hash
        instagram
        twitter
        youtube
        poster
        modele_account_data {
          account
          balance
          created_at
        }
        new_follower_count
        photos_count
        followers_count
        created_at
      }
    }
  }
`

export const UPDATE_USER = gql`
  mutation UpdateUser($id: ID!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      id
      active
      admin
      name
      email
      first_login
      avatar
      telephone
      created_at
      user_type
      is_model
      is_consumer
      gender
      pm_last_four
      modele {
        id
        stage_name
        bio
        facebook
        hash
        instagram
        twitter
        youtube
        poster
        modele_account_data {
          account
          balance
          created_at
        }
        new_follower_count
        photos_count
        followers_count
        created_at
      }
    }
  }
`

export const CHANGE_PASSWORD = gql`
  mutation ChangePassword($input: ChangePasswordInput!) {
    changePassword(input: $input) {
      success
      message
    }
  }
`

export const RESET_PASSWORD = gql`
  mutation ResetPassword($input: ResetPasswordInput!) {
    resetPassword(input: $input) {
      success
      message
    }
  }
`

export const DELETE_USER_ACCOUNT = gql`
  mutation DeleteUser($input: DeleteUserInput!) {
    deleteUser(input: $input) {
      id
    }
  }
`

export const DELETE_MODEL_ACCOUNT = gql`
  mutation DeleteModel($input: DeleteModelInput!) {
    deleteModel(input: $input) {
      success
      user {
        id
        active
        admin
        name
        email
        first_login
        avatar
        telephone
        created_at
        user_type
        is_model
        is_consumer
        gender
        pm_last_four
        modele {
          id
          stage_name
          bio
          facebook
          hash
          instagram
          twitter
          youtube
          poster
          modele_account_data {
            account
            balance
            created_at
          }
          new_follower_count
          photos_count
          followers_count
          created_at
        }
      }
    }
  }
`

export const ADD_PHOTO_MUTATION = gql`
  mutation AddMedia($input: MediaInput!) {
    addMedia(input: $input) {
      id
      uri
      modele {
        id
        stage_name
      }
    }
  }
`

export const UPDATE_AVATAR_MUTATION = gql`
  mutation UpdateAvatar($input: UpdateAvatarInput!) {
    updateAvatar(input: $input) {
      success
    }
  }
`

export const UPDATE_POSTER_MUTATION = gql`
  mutation UpdatePoster($input: UpdatePosterInput!) {
    updatePoster(input: $input) {
      success
    }
  }
`

export const LOG_OUT_MUTATION = gql`
  mutation LogOut {
    logout {
      success
    }
  }
`

export const TOGGLE_LIKE = gql`
  mutation ToggleLike($input: ToggleLikeInput!) {
    toggleLike(input: $input) {
      success
    }
  }
`

export const CREATE_ROOM = gql`
  mutation CreateRoom($input: CreateRoomInput!) {
    createRoom(input: $input) {
      id
    }
  }
`

export const TOGGLE_FOLLOW = gql`
  mutation ToggleFollow($input: ToggleFollowInput!) {
    toggleFollow(input: $input) {
      success
    }
  }
`

export const SETUP_PRICE = gql`
  mutation SetupPrice($input: AddPriceInput!) {
    addPrice(input: $input) {
      success
    }
  }
`

export const SET_DEFAULT_CARD = gql`
  mutation SetDefaultCard($input: CardInput!) {
    setDefaultCard(input: $input) {
      success
      id
      last4
    }
  }
`

export const DELETE_CARD = gql`
  mutation DeleteCard($input: CardInput!) {
    deleteCard(input: $input) {
      success
    }
  }
`

export const ADD_CARD = gql`
  mutation AddCard($input: CardInput!) {
    addCard(input: $input) {
      success
    }
  }
`

export const FACEOOK_LOGIN = gql`
  mutation facebookLogin($code: String!) {
    handleFacebookConnect(code: $code) {
      data {
        id
        name
        email
        avatar_url
        telephone
        first_login
        created_at
      }
      access_token
    }
  }
`
