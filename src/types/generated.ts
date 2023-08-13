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
  /** The mutation used by a user to sign up */
  createUser?: Maybe<TokenPairResponse>;
};


export type MutationCreateUserArgs = {
  input?: InputMaybe<CreateUserInput>;
};

export type Query = {
  __typename?: 'Query';
  /** The query to get a user's username by their id */
  getUsernameById?: Maybe<GetUsernameByIdResponse>;
};


export type QueryGetUsernameByIdArgs = {
  input?: InputMaybe<GetUsernameByIdInput>;
};

export type TokenPairResponse = {
  __typename?: 'TokenPairResponse';
  /** The user's access token, to be stored and used to authenticate every request */
  accessToken?: Maybe<Scalars['String']['output']>;
  /** The user's refresh token, to be stored and used to regenerate a new access token when it expires */
  refreshToken?: Maybe<Scalars['String']['output']>;
};
