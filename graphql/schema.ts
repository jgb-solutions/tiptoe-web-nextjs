import { gql } from "apollo-server-core"

const typeDefs = gql`
  type Query {
    users: [User!]!
    user(id: ID): User
    me: User!

    # models(page: Int = 1, orderBy: [OrderByClause!]): [Model!]!
    # model(hash: String): Model

    # fetchMyModels: [Model!]
    # fetchMyFollowers: [User!]

    # categories: [Category!]!
    # category(id: ID): Category

    # # photos: [Photo!]!
    # photo(id: ID): Photo

    # photos(page: Int = 1, orderBy: [OrderByClause!]): [Photo!]!

    # # favoritePhoto(user_id: Int, page: Int = 1, first: Int = 10, orderBy: [OrderByClause!]): [Photo!]!
    # favoritePhoto( page: Int = 1, first: Int = 10, orderBy: [OrderByClause!]): [Photo!]!

    # myCards: [GetCardResponse!]!
    # myInvoices: [InvoceResponse!]!

    # getModelPrice(hash: String): GetModelPriceStripeIdResponse!

    # createPaymentIntent: PaymentIntentResponse!
    # deleteInvoice(invoiceId: String): AddPriceResponse!

    # myTransaction(model_id: ID!)): [ModelTransaction!]!

    # uploadUrl(input: UploadUrlInput!): UploadUrl!
    # verifyEmail(email: String): VerifyEmailResponse
    # verifyCode(input: CodeVerificationInput): VerifyCodeResponse

    # getPublishableKey: PublishableKey!
  }

  type Mutation {
    ##user
    updateUserWithModel(id: ID!, input: UpdateUserWithModelInput!): User
    updateUser(id: ID!, input: UpdateUserInput!): User
    changePassword(input: ChangePasswordInput!): ChangePasswordResponse
    deleteUser(input: DeleteUserInput!): User
    updateAvatar(input: UpdateAvatarInput!): UpdatePhotoResponse



    ##model
    toggleFollow(input: ToggleFollowInput!): ToggleFollowResponse
    modelPlan(input: ModelPlanInput!): ModelPlanResponse
    addPrice(input: AddPriceInput!): AddPriceResponse
    deleteModel(input: DeleteModelInput!): DeleteModelResponse!
    updatePoster(input: UpdatePosterInput!): UpdatePhotoResponse

    ##category
    createCategory(input: CategoryInput!): Category
    updateCategory(id: ID!, input: CategoryInput): Category
    deleteCategory(id: ID!): Category

    ##media
    addMedia(input: MediaInput!): Photo
    updatePhoto(id: ID!, input: MediaInput): Photo
    deletePhoto(id: ID!): Photo

    ##favorite
    addFavorite(input: FavoriteInput!): Favorite
    updateFavorite(id: ID!, input: FavoriteInput): Favorite
    deleteFavorite(id: ID!): Favorite

    ##follower
    addFollower(input: FollowerInput!): Follower
    updateFollower(id: ID!, input: FollowerInput): Follower
    deleteFollower(id: ID!): Follower

    toggleLike(input: ToggleLikeInput!): ToggleLikeResponse

    ##card
    addCard(input: CardInput!): CardResponse
    deleteCard(input: CardInput!): CardResponse
    setDefaultCard(input: CardInput!): CardResponse

    ##auth
    login(input: LoginInput): AuthPayload!
    register(input: RegisterInput): RegisterResponse!
    verifyUserEmail(input: VerifyUserEmailInput!): VerifyUserEmailResponse
    resetPassword(input: ResetPasswordInput!): ResetPasswordResponse
  }

  type UploadUrl {
  signedUrl: String!
  filename: String!
  }

  input UploadUrlInput {
    name: String!
  }

  input UpdateAvatarInput {
    avatar: String!
  }

  input UpdatePosterInput {
    poster: String!
  }

  type UpdatePhotoResponse {
    success: String!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    active: Boolean!
    admin: Boolean!
    first_login: Boolean!
    user_type: String!
    is_model: Boolean
    is_consumer: Boolean
    avatar: String
    telephone: String!
    gender: String!
    model: Model
    models: [Model!]!
    favorites: [Photo!]!
    pm_last_four: String
    is_new: Boolean

    # createdAt: DateTime!
    # updatedAt: DateTime!
  }

  type Model {
    id: ID!
    stage_name: String!
    bucket: String
    poster: String
    hash: String
    price: String
    bio: String
    facebook: String
    instagram: String
    twitter: String
    youtube: String
    verified: Boolean
    followed_by_me: Boolean
    new_follower_count: Int
    user: User
    followers: [User!]!
    photos_count: Int
    followers_count: Int
    photos: [Photo!]!
    model_account_data: ModelAccount

    # createdAt: DateTime!
    # updatedAt: DateTime!
  }

  type DeleteModelResponse {
      success: Boolean
      user: User
  }

  type ModelAccount {
    id: ID!
    model_id: ID!
    account: Int!
    balance: Int!

    # createdAt: DateTime!
    # updatedAt: DateTime!
  }

  type ModelTransaction {
    id: ID!
    amount: Int!
    type: String!

    # createdAt: DateTime!
    # updatedAt: DateTime!
  }

  type Category {
    id: ID!
    name: String!
    slug: String!
    photos: [Photo!]!

    # createdAt: DateTime!
    # updatedAt: DateTime!
  }

  type Photo {
    id: ID!
    model_id: Int!
    category_id: Int
    uri: String!
    bucket: String!
    caption: String
    detail: String
    featured: Boolean
    for_my_model: Boolean
    hash: String
    type: String
    publish: Boolean
    liked_by_me: Boolean
    is_for_me: Boolean
    likes_count: Int
    category: Category!
    model: Model
    users: [User!]!

    # createdAt: DateTime!
    # updatedAt: DateTime!
  }

  type Favorite {
      id: ID!
      user_id: Int!
      photo_id: Int!
      photo: Photo
      user: User

      # createdAt: DateTime!
      # updatedAt: DateTime!
  }

  type PublishableKey {
      key: String
  }

  type PaymentIntentResponse {
      client_secret: String
  }

  type VerifyEmailResponse {
      message: String
  }

  type VerifyCodeResponse {
      success: Boolean
  }


  type ToggleLikeResponse {
      success: Boolean
  }

  type ToggleFollowResponse {
      success: Boolean
  }

  type ModelPlanResponse {
      success: Boolean
  }

  type AddPriceResponse {
      success: Boolean
  }

  type CardResponse {
      success: Boolean
      id: String
      last4: String
  }

  type GetCardResponse {
      id: String
      brand: String
      last4: String
      exp_month: String
      exp_year: String
  }

  type InvoceResponse {
      id: String
      amount_paid: String
      created: String
      hosted_invoice_url: String
      lines: String
  }

  type VerifyUserEmailResponse {
      exist: Boolean
  }

  type Follower {
      id: ID!
      model_id: Int!
      user_id: Int!

      # createdAt: DateTime!
      # updatedAt: DateTime!
  }

  type ChangePasswordResponse {
      success: Boolean
      message: String
  }


  type GetModelPriceStripeIdResponse {
      price_id: String
      cost: String
  }

  type AuthPayload {
      access_token: String
      refresh_token: String
      expires_in: Int
      token_type: String
      user: User
  }

  type RefreshTokenPayload {
      access_token: String!
      refresh_token: String!
      expires_in: Int!
      token_type: String!
  }

  type LogoutResponse {
      status: String!
      message: String
  }

  type ForgotPasswordResponse {
      status: String!
      message: String
  }

  type RegisterResponse {
      tokens: AuthPayload
      status: RegisterStatuses!
  }

  type UpdatePasswordResponse {
      status: String!
      message: String
  }

  type ResetPasswordResponse {
      message: String
      success: Boolean
  }

  ##input
  input CodeVerificationInput {
    code: String
    email: String
  }

  input ResetPasswordInput {
    email: String
    password: String
  }

  input CategoryInput {
    name: String!
  }

  input ChangePasswordInput {
    password: String!
    new_password: String!
  }

  input ToggleLikeInput {
    photo_id: String!
  }

  input CardInput {
    card: String!
  }

  input ToggleFollowInput {
    model_id: String!
    payment_method: String
  }

  input VerifyUserEmailInput {
    email: String!
  }

  input CancelSubscriptionInput {
    paymentMethod: String!
  }

  input MediaInput {
    model_id: Int!
    category_id: Int
    uri: String!
    bucket: String!
    type: String!
    caption: String
    featured: Boolean
    publish: Boolean
  }

  input FavoriteInput {
    photo_id: Int!
    user_id: Int!
  }

  input FollowerInput {
    model_id: Int!
    user_id: Int!
  }

  input UpdateUserInput {
    id: ID!
    name: String
    email: String
    gender: Genre
    first_login: Boolean
    user_type: UserType
    telephone: String
    avatar: String
  }

  input UpdateUserWithModelInput {
    id: ID!
    name: String
    email: String
    gender: Genre
    first_login: Boolean
    user_type: UserType
    telephone: String
    avatar: String
    model: ModelHasOne
  }

  input ModelHasOne {
    create: CreateModelInput
    update: UpdateModelInput
    upsert: UpsertModelInput
    delete: ID
  }

  input CreateModelInput {
    stage_name: String!
    bucket: String
    poster: String
    bio: String
    facebook: String
    instagram: String
    twitter: String
    youtube: String
  }

  input UpdateModelInput {
    id: ID
    stage_name: String
    bucket: String
    poster: String
    bio: String
    facebook: String
    instagram: String
    twitter: String
    youtube: String
  }

  input UpsertModelInput {
    id: ID
    stage_name: String!
    bucket: String
    poster: String
    hash: String
    bio: String
    facebook: String
    instagram: String
    twitter: String
    youtube: String
  }

  input ModelPlanInput {
      user_id: Int!
      name: String!
      cost: Int!
  }

  input AddPriceInput {
    user_id: String!
    cost: Int!
  }

  input OrderByClause {
    field: String!
    order: SortOrder!
  }

  input DeleteModelInput{
    id: String
  }

  input DeleteUserInput{
    id: String
  }

  enum SortOrder {
    ASC
    DESC
  }

  input LoginInput {
    username: String!
    password: String!
  }

  input RefreshTokenInput {
    refresh_token: String
  }

  input PaymentIntentInput {
    hash: String!
  }

  enum RegisterStatuses {
    MUST_VERIFY_EMAIL
    SUCCESS
  }

  enum UserType {
    MODEL
    CONSUMER
  }

  enum Genre {
    MALE
    FEMALE
    OTHER
  }

  input ForgotPasswordInput {
    email: String!
  }

  input NewPasswordWithCodeInput {
    email: String!
    token: String!
    password: String!
    password_confirmation: String!
  }

  input RegisterInput {
    name: String!
    email: String!
    password: String!
    gender: Genre
    user_type: UserType
    telephone: String!
    model: ModelHasOne
  }

  input CreateModelInput {
    stage_name: String!
    bucket: String
    poster: String
    has: Int
    bio: String
    facebook: String
    instagram: String
    twitter: String
    youtube: String
  }

  input SocialLoginInput {
    provider: String!
    token: String!
  }

  input VerifyEmailInput {
    token: String!
  }

  input UpdatePassword {
    old_password: String!
    password: String!
    password_confirmation: String!
  }
`

export { typeDefs }