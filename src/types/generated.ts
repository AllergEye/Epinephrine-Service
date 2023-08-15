export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AuthenticateUserInput = {
  /** The user's email */
  email: Scalars['String']['input'];
  /** The user's password */
  password: Scalars['String']['input'];
};

export type CreateUserInput = {
  /** The user's email */
  email: Scalars['String']['input'];
  /** The user's first name */
  firstName: Scalars['String']['input'];
  /** The user's last name */
  lastName: Scalars['String']['input'];
  /** The user's password */
  password: Scalars['String']['input'];
};

export type Dish = {
  __typename?: 'Dish';
  /** The dish's allergens */
  allergens?: Maybe<Array<Maybe<DishAllergen>>>;
  /** The name of the dish */
  name: Scalars['String']['output'];
};

export type DishAllergen = {
  __typename?: 'DishAllergen';
  /** Is the probability of this allergen confirmed */
  isProbabilityKnown: Scalars['Boolean']['output'];
  /** The name of the allergen */
  name: Scalars['String']['output'];
  /** The probability that the allergen is present in the given dish */
  probability: Scalars['Int']['output'];
};

export type GenerateAccessTokenFromRefreshTokenInput = {
  /** The user's refresh token */
  refreshToken: Scalars['String']['input'];
};

export type GetUsernameByIdInput = {
  /** The user's id */
  userId: Scalars['ID']['input'];
};

export type GetUsernameByIdResponse = {
  __typename?: 'GetUsernameByIdResponse';
  /** The user's username */
  username?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** The mutation used by a user to log in */
  authenticateUser?: Maybe<TokenPairResponse>;
  /** The mutation used by a user to sign up */
  createUser?: Maybe<TokenPairResponse>;
  /** The mutation used to regenerate an access token from a refresh token */
  generateAccessTokenFromRefreshToken?: Maybe<TokenPairResponse>;
};


export type MutationAuthenticateUserArgs = {
  input?: InputMaybe<AuthenticateUserInput>;
};


export type MutationCreateUserArgs = {
  input?: InputMaybe<CreateUserInput>;
};


export type MutationGenerateAccessTokenFromRefreshTokenArgs = {
  input?: InputMaybe<GenerateAccessTokenFromRefreshTokenInput>;
};

export type Query = {
  __typename?: 'Query';
  /** The query to get a user's username by their id */
  getUsernameById?: Maybe<GetUsernameByIdResponse>;
  /** The query to get all restaurants */
  restaurants?: Maybe<Array<Maybe<Restaurant>>>;
};


export type QueryGetUsernameByIdArgs = {
  input?: InputMaybe<GetUsernameByIdInput>;
};

export type Restaurant = {
  __typename?: 'Restaurant';
  /** Restaurant's dishes */
  dishes?: Maybe<Array<Maybe<Dish>>>;
  /** The restaurant's ID */
  id: Scalars['ID']['output'];
  /** Restaurant's locations */
  locations?: Maybe<Array<Maybe<RestaurantLocations>>>;
  /** Restaurant's name */
  name: Scalars['String']['output'];
};

export type RestaurantLocations = {
  __typename?: 'RestaurantLocations';
  /** The restaurant's city */
  city: Scalars['String']['output'];
  /** The restaurant's country - 2 letter country code */
  country: Scalars['String']['output'];
  /** The restaurant's postal/zip code - both Canadian and US restaurants will use this postalCode field */
  postalCode: Scalars['String']['output'];
  /** The restaurant's province/state - both Canadian and US restaurants will use this province field */
  province: Scalars['String']['output'];
  /** The restaurant's street sddress line 1 */
  streetAddressLine1: Scalars['String']['output'];
  /** The restaurant's street sddress line 2 - can be null */
  streetAddressLine2?: Maybe<Scalars['String']['output']>;
};

export type TokenPairResponse = {
  __typename?: 'TokenPairResponse';
  /** The user's access token, to be stored and used to authenticate every request */
  accessToken?: Maybe<Scalars['String']['output']>;
  /** The user's refresh token, to be stored and used to regenerate a new access token when it expires */
  refreshToken?: Maybe<Scalars['String']['output']>;
};
