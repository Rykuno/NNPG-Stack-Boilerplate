/* eslint-disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: string;
  JWT: any;
};

export type Auth = {
  __typename?: 'Auth';
  /** JWT access token */
  accessToken: Scalars['JWT'];
  /** JWT refresh token */
  refreshToken: Scalars['JWT'];
  user: User;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  login: Auth;
  refreshToken: Token;
  signup: Auth;
  toggleUserConnection: UserConnection;
  uploadAvatar: SignedResponse;
};


export type MutationLoginArgs = {
  data: LoginInput;
};


export type MutationRefreshTokenArgs = {
  token: Scalars['JWT'];
};


export type MutationSignupArgs = {
  data: SignupInput;
};


export type MutationToggleUserConnectionArgs = {
  data: ToggleUserConnectionInput;
};


export type MutationUploadAvatarArgs = {
  fileType: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  user: User;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

export type SignedResponse = {
  __typename?: 'SignedResponse';
  key: Scalars['String'];
  uploadUrl: Scalars['String'];
  url: Scalars['String'];
};

export type SignupInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type ToggleUserConnectionInput = {
  followingId: Scalars['String'];
};

export type Token = {
  __typename?: 'Token';
  /** JWT access token */
  accessToken: Scalars['JWT'];
  /** JWT refresh token */
  refreshToken: Scalars['JWT'];
};

export type User = {
  __typename?: 'User';
  avatar?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  displayName: Scalars['String'];
  email: Scalars['String'];
  followerCount: Scalars['Int'];
  followingCount: Scalars['Int'];
  id: Scalars['ID'];
  isFollowing: Scalars['Boolean'];
  isMe: Scalars['Boolean'];
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
  usernameId: Scalars['String'];
};

export type UserConnection = {
  __typename?: 'UserConnection';
  createdAt: Scalars['DateTime'];
  follower: User;
  followerId: Scalars['String'];
  following: User;
  followingId: Scalars['String'];
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  usernameId?: InputMaybe<Scalars['String']>;
};

export type MeFragment = { __typename?: 'User', id: string, username: string, email: string, avatar?: string | null };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, username: string, email: string, avatar?: string | null } | null };

export type LoginMutationVariables = Exact<{
  data: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'Auth', accessToken: any, refreshToken: any, user: { __typename?: 'User', id: string, username: string, email: string, avatar?: string | null } } };

export type SignupMutationVariables = Exact<{
  data: SignupInput;
}>;


export type SignupMutation = { __typename?: 'Mutation', signup: { __typename?: 'Auth', accessToken: any, refreshToken: any, user: { __typename?: 'User', id: string, username: string, email: string, avatar?: string | null } } };

export type ToggleUserConnectionMutationVariables = Exact<{
  data: ToggleUserConnectionInput;
}>;


export type ToggleUserConnectionMutation = { __typename?: 'Mutation', toggleUserConnection: { __typename?: 'UserConnection', id: string, follower: { __typename?: 'User', id: string, followingCount: number }, following: { __typename?: 'User', id: string, followerCount: number, isFollowing: boolean } } };

export type UserQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type UserQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, avatar?: string | null, username: string, displayName: string, isFollowing: boolean, followerCount: number, followingCount: number, isMe: boolean } };

export type UploadUserAvatarMutationVariables = Exact<{
  fileType: Scalars['String'];
}>;


export type UploadUserAvatarMutation = { __typename?: 'Mutation', uploadAvatar: { __typename?: 'SignedResponse', uploadUrl: string } };

export type RefreshTokenMutationVariables = Exact<{
  token: Scalars['JWT'];
}>;


export type RefreshTokenMutation = { __typename?: 'Mutation', refreshToken: { __typename?: 'Token', accessToken: any, refreshToken: any } };

export const MeFragmentDoc = gql`
    fragment Me on User {
  id
  username
  email
  avatar
}
    `;
export const MeDocument = gql`
    query Me {
  me {
    ...Me
  }
}
    ${MeFragmentDoc}`;
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const LoginDocument = gql`
    mutation Login($data: LoginInput!) {
  login(data: $data) {
    accessToken
    refreshToken
    user {
      ...Me
    }
  }
}
    ${MeFragmentDoc}`;
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const SignupDocument = gql`
    mutation Signup($data: SignupInput!) {
  signup(data: $data) {
    user {
      ...Me
    }
    accessToken
    refreshToken
  }
}
    ${MeFragmentDoc}`;
export function useSignupMutation(baseOptions?: Apollo.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, options);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<SignupMutation, SignupMutationVariables>;
export const ToggleUserConnectionDocument = gql`
    mutation ToggleUserConnection($data: ToggleUserConnectionInput!) {
  toggleUserConnection(data: $data) {
    id
    follower {
      id
      followingCount
    }
    following {
      id
      followerCount
      isFollowing
    }
  }
}
    `;
export function useToggleUserConnectionMutation(baseOptions?: Apollo.MutationHookOptions<ToggleUserConnectionMutation, ToggleUserConnectionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ToggleUserConnectionMutation, ToggleUserConnectionMutationVariables>(ToggleUserConnectionDocument, options);
      }
export type ToggleUserConnectionMutationHookResult = ReturnType<typeof useToggleUserConnectionMutation>;
export type ToggleUserConnectionMutationResult = Apollo.MutationResult<ToggleUserConnectionMutation>;
export type ToggleUserConnectionMutationOptions = Apollo.BaseMutationOptions<ToggleUserConnectionMutation, ToggleUserConnectionMutationVariables>;
export const UserDocument = gql`
    query User($where: UserWhereUniqueInput!) {
  user(where: $where) {
    id
    avatar
    username
    displayName
    isFollowing
    followerCount
    followingCount
    isMe
  }
}
    `;
export function useUserQuery(baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const UploadUserAvatarDocument = gql`
    mutation UploadUserAvatar($fileType: String!) {
  uploadAvatar(fileType: $fileType) {
    uploadUrl
  }
}
    `;
export function useUploadUserAvatarMutation(baseOptions?: Apollo.MutationHookOptions<UploadUserAvatarMutation, UploadUserAvatarMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UploadUserAvatarMutation, UploadUserAvatarMutationVariables>(UploadUserAvatarDocument, options);
      }
export type UploadUserAvatarMutationHookResult = ReturnType<typeof useUploadUserAvatarMutation>;
export type UploadUserAvatarMutationResult = Apollo.MutationResult<UploadUserAvatarMutation>;
export type UploadUserAvatarMutationOptions = Apollo.BaseMutationOptions<UploadUserAvatarMutation, UploadUserAvatarMutationVariables>;
export const RefreshTokenDocument = gql`
    mutation RefreshToken($token: JWT!) {
  refreshToken(token: $token) {
    accessToken
    refreshToken
  }
}
    `;
export function useRefreshTokenMutation(baseOptions?: Apollo.MutationHookOptions<RefreshTokenMutation, RefreshTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RefreshTokenMutation, RefreshTokenMutationVariables>(RefreshTokenDocument, options);
      }
export type RefreshTokenMutationHookResult = ReturnType<typeof useRefreshTokenMutation>;
export type RefreshTokenMutationResult = Apollo.MutationResult<RefreshTokenMutation>;
export type RefreshTokenMutationOptions = Apollo.BaseMutationOptions<RefreshTokenMutation, RefreshTokenMutationVariables>;