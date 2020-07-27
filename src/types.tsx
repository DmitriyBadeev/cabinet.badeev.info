import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The multiplier path scalar represents a valid GraphQL multiplier path string. */
  MultiplierPath: any;
  PaginationAmount: any;
  /** The `DateTime` scalar represents an ISO-8601 compliant date time type. */
  DateTime: any;
};

export type Queries = {
  __typename?: 'Queries';
  authors?: Maybe<Array<Maybe<Author>>>;
  backendTags?: Maybe<Array<Maybe<Tag>>>;
  frontendTags?: Maybe<Array<Maybe<Tag>>>;
  secretData?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  tagsByWorkId?: Maybe<Array<Maybe<Tag>>>;
  tagWorkConnections?: Maybe<Array<Maybe<TagWork>>>;
  typografText?: Maybe<Scalars['String']>;
  workById?: Maybe<Work>;
  works?: Maybe<WorkConnection>;
  worksByTagIds?: Maybe<WorkConnection>;
};


export type QueriesAuthorsArgs = {
  where?: Maybe<AuthorFilter>;
};


export type QueriesTagsArgs = {
  where?: Maybe<TagFilter>;
};


export type QueriesTagsByWorkIdArgs = {
  workId: Scalars['Int'];
};


export type QueriesTypografTextArgs = {
  text?: Maybe<Scalars['String']>;
};


export type QueriesWorkByIdArgs = {
  id: Scalars['Int'];
};


export type QueriesWorksArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['PaginationAmount']>;
  last?: Maybe<Scalars['PaginationAmount']>;
};


export type QueriesWorksByTagIdsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['PaginationAmount']>;
  last?: Maybe<Scalars['PaginationAmount']>;
  tagIds?: Maybe<Array<Scalars['Int']>>;
};

export type Mutations = {
  __typename?: 'Mutations';
  addBackendTag?: Maybe<BackendTag>;
  addFrontendTag?: Maybe<FrontendTag>;
  connectTagAndWork?: Maybe<TagWork>;
  createAuthor?: Maybe<Author>;
  createTag?: Maybe<Tag>;
  createWork?: Maybe<Work>;
  deleteAuthor?: Maybe<Author>;
  deleteBackendTag?: Maybe<BackendTag>;
  deleteFrontendTag?: Maybe<FrontendTag>;
  deleteTag?: Maybe<Tag>;
  deleteWork?: Maybe<Work>;
  disconnectTagAndWork?: Maybe<TagWork>;
  updateAuthor?: Maybe<Author>;
  updateTag?: Maybe<Tag>;
  updateWork?: Maybe<Work>;
};


export type MutationsAddBackendTagArgs = {
  tagId: Scalars['Int'];
};


export type MutationsAddFrontendTagArgs = {
  tagId: Scalars['Int'];
};


export type MutationsConnectTagAndWorkArgs = {
  inputTagWork?: Maybe<ConnectTagWorkInput>;
};


export type MutationsCreateAuthorArgs = {
  inputAuthor?: Maybe<CreateAuthorInput>;
};


export type MutationsCreateTagArgs = {
  inputTag?: Maybe<CreateTagInput>;
};


export type MutationsCreateWorkArgs = {
  inputWork?: Maybe<CreateWorkInput>;
};


export type MutationsDeleteAuthorArgs = {
  authorId: Scalars['Int'];
};


export type MutationsDeleteBackendTagArgs = {
  tagId: Scalars['Int'];
};


export type MutationsDeleteFrontendTagArgs = {
  tagId: Scalars['Int'];
};


export type MutationsDeleteTagArgs = {
  tagId: Scalars['Int'];
};


export type MutationsDeleteWorkArgs = {
  workId: Scalars['Int'];
};


export type MutationsDisconnectTagAndWorkArgs = {
  inputTagWork?: Maybe<ConnectTagWorkInput>;
};


export type MutationsUpdateAuthorArgs = {
  inputAuthor?: Maybe<UpdateAuthorInput>;
};


export type MutationsUpdateTagArgs = {
  inputTag?: Maybe<UpdateTagInput>;
};


export type MutationsUpdateWorkArgs = {
  inputWork?: Maybe<UpdateWorkInput>;
};


export type Work = {
  __typename?: 'Work';
  authors?: Maybe<Array<Maybe<Author>>>;
  countViews: Scalars['Int'];
  date: Scalars['DateTime'];
  html?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  imgPath?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<TagWork>>>;
  task?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** A connection to a list of items. */
export type WorkConnection = {
  __typename?: 'WorkConnection';
  /** A list of edges. */
  edges?: Maybe<Array<WorkEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Maybe<Work>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};


export type TagFilter = {
  AND?: Maybe<Array<TagFilter>>;
  description?: Maybe<Scalars['String']>;
  description_contains?: Maybe<Scalars['String']>;
  description_ends_with?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  description_not_ends_with?: Maybe<Scalars['String']>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_starts_with?: Maybe<Scalars['String']>;
  description_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  id_gt?: Maybe<Scalars['Int']>;
  id_gte?: Maybe<Scalars['Int']>;
  id_in?: Maybe<Array<Scalars['Int']>>;
  id_lt?: Maybe<Scalars['Int']>;
  id_lte?: Maybe<Scalars['Int']>;
  id_not?: Maybe<Scalars['Int']>;
  id_not_gt?: Maybe<Scalars['Int']>;
  id_not_gte?: Maybe<Scalars['Int']>;
  id_not_in?: Maybe<Array<Scalars['Int']>>;
  id_not_lt?: Maybe<Scalars['Int']>;
  id_not_lte?: Maybe<Scalars['Int']>;
  OR?: Maybe<Array<TagFilter>>;
  title?: Maybe<Scalars['String']>;
  title_contains?: Maybe<Scalars['String']>;
  title_ends_with?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  title_not_ends_with?: Maybe<Scalars['String']>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_starts_with?: Maybe<Scalars['String']>;
  title_starts_with?: Maybe<Scalars['String']>;
};

export type AuthorFilter = {
  AND?: Maybe<Array<AuthorFilter>>;
  id?: Maybe<Scalars['Int']>;
  id_gt?: Maybe<Scalars['Int']>;
  id_gte?: Maybe<Scalars['Int']>;
  id_in?: Maybe<Array<Scalars['Int']>>;
  id_lt?: Maybe<Scalars['Int']>;
  id_lte?: Maybe<Scalars['Int']>;
  id_not?: Maybe<Scalars['Int']>;
  id_not_gt?: Maybe<Scalars['Int']>;
  id_not_gte?: Maybe<Scalars['Int']>;
  id_not_in?: Maybe<Array<Scalars['Int']>>;
  id_not_lt?: Maybe<Scalars['Int']>;
  id_not_lte?: Maybe<Scalars['Int']>;
  link?: Maybe<Scalars['String']>;
  link_contains?: Maybe<Scalars['String']>;
  link_ends_with?: Maybe<Scalars['String']>;
  link_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  link_not?: Maybe<Scalars['String']>;
  link_not_contains?: Maybe<Scalars['String']>;
  link_not_ends_with?: Maybe<Scalars['String']>;
  link_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  link_not_starts_with?: Maybe<Scalars['String']>;
  link_starts_with?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<AuthorFilter>>;
  role?: Maybe<Scalars['String']>;
  role_contains?: Maybe<Scalars['String']>;
  role_ends_with?: Maybe<Scalars['String']>;
  role_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  role_not?: Maybe<Scalars['String']>;
  role_not_contains?: Maybe<Scalars['String']>;
  role_not_ends_with?: Maybe<Scalars['String']>;
  role_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  role_not_starts_with?: Maybe<Scalars['String']>;
  role_starts_with?: Maybe<Scalars['String']>;
  workId?: Maybe<Scalars['Int']>;
  workId_gt?: Maybe<Scalars['Int']>;
  workId_gte?: Maybe<Scalars['Int']>;
  workId_in?: Maybe<Array<Scalars['Int']>>;
  workId_lt?: Maybe<Scalars['Int']>;
  workId_lte?: Maybe<Scalars['Int']>;
  workId_not?: Maybe<Scalars['Int']>;
  workId_not_gt?: Maybe<Scalars['Int']>;
  workId_not_gte?: Maybe<Scalars['Int']>;
  workId_not_in?: Maybe<Array<Scalars['Int']>>;
  workId_not_lt?: Maybe<Scalars['Int']>;
  workId_not_lte?: Maybe<Scalars['Int']>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** Indicates whether more edges exist following the set defined by the clients arguments. */
  hasNextPage: Scalars['Boolean'];
  /** Indicates whether more edges exist prior the set defined by the clients arguments. */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** An edge in a connection. */
export type WorkEdge = {
  __typename?: 'WorkEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Work>;
};

export type Tag = {
  __typename?: 'Tag';
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  works?: Maybe<Array<Maybe<TagWork>>>;
};

export type TagWork = {
  __typename?: 'TagWork';
  id: Scalars['Int'];
  tag?: Maybe<Tag>;
  tagId: Scalars['Int'];
  work?: Maybe<Work>;
  workId: Scalars['Int'];
};

export type Author = {
  __typename?: 'Author';
  id: Scalars['Int'];
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  work?: Maybe<Work>;
  workId: Scalars['Int'];
};

export type CreateWorkInput = {
  date: Scalars['DateTime'];
  html?: Maybe<Scalars['String']>;
  imgPath?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  task?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type UpdateWorkInput = {
  date?: Maybe<Scalars['DateTime']>;
  html?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  imgPath?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  task?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type CreateTagInput = {
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type ConnectTagWorkInput = {
  tagId: Scalars['Int'];
  workId: Scalars['Int'];
};

export type UpdateTagInput = {
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
};

export type FrontendTag = {
  __typename?: 'FrontendTag';
  id: Scalars['Int'];
  tag?: Maybe<Tag>;
  tagId: Scalars['Int'];
};

export type BackendTag = {
  __typename?: 'BackendTag';
  id: Scalars['Int'];
  tag?: Maybe<Tag>;
  tagId: Scalars['Int'];
};

export type CreateAuthorInput = {
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  workId: Scalars['Int'];
};

export type UpdateAuthorInput = {
  id: Scalars['Int'];
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  workId?: Maybe<Scalars['Int']>;
};


export type TagsByWorkIdQueryVariables = Exact<{
  workId: Scalars['Int'];
}>;


export type TagsByWorkIdQuery = (
  { __typename?: 'Queries' }
  & { tagsByWorkId?: Maybe<Array<Maybe<(
    { __typename?: 'Tag' }
    & Pick<Tag, 'id' | 'title'>
  )>>> }
);

export type AllTagsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTagsQuery = (
  { __typename?: 'Queries' }
  & { tags?: Maybe<Array<Maybe<(
    { __typename?: 'Tag' }
    & Pick<Tag, 'id' | 'title'>
  )>>> }
);

export type ConnectMutationVariables = Exact<{
  tagId: Scalars['Int'];
  workId: Scalars['Int'];
}>;


export type ConnectMutation = (
  { __typename?: 'Mutations' }
  & { connectTagAndWork?: Maybe<(
    { __typename?: 'TagWork' }
    & Pick<TagWork, 'id'>
  )> }
);

export type DisconnectMutationVariables = Exact<{
  tagId: Scalars['Int'];
  workId: Scalars['Int'];
}>;


export type DisconnectMutation = (
  { __typename?: 'Mutations' }
  & { disconnectTagAndWork?: Maybe<(
    { __typename?: 'TagWork' }
    & Pick<TagWork, 'id'>
  )> }
);

export type CreateTagMutationVariables = Exact<{
  title: Scalars['String'];
}>;


export type CreateTagMutation = (
  { __typename?: 'Mutations' }
  & { createTag?: Maybe<(
    { __typename?: 'Tag' }
    & Pick<Tag, 'id'>
  )> }
);

export type DeleteTagMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteTagMutation = (
  { __typename?: 'Mutations' }
  & { deleteTag?: Maybe<(
    { __typename?: 'Tag' }
    & Pick<Tag, 'id'>
  )> }
);

export type WorksQueryVariables = Exact<{ [key: string]: never; }>;


export type WorksQuery = (
  { __typename?: 'Queries' }
  & { works?: Maybe<(
    { __typename?: 'WorkConnection' }
    & { nodes?: Maybe<Array<Maybe<(
      { __typename?: 'Work' }
      & Pick<Work, 'id' | 'title' | 'date'>
    )>>> }
  )> }
);

export type WorkByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type WorkByIdQuery = (
  { __typename?: 'Queries' }
  & { workById?: Maybe<(
    { __typename?: 'Work' }
    & Pick<Work, 'id' | 'title' | 'shortDescription' | 'date' | 'imgPath' | 'html' | 'link' | 'task'>
    & { authors?: Maybe<Array<Maybe<(
      { __typename?: 'Author' }
      & Pick<Author, 'id' | 'name' | 'link' | 'role'>
    )>>> }
  )> }
);

export type CreateAuthorMutationVariables = Exact<{
  name: Scalars['String'];
  role: Scalars['String'];
  link: Scalars['String'];
  workId: Scalars['Int'];
}>;


export type CreateAuthorMutation = (
  { __typename?: 'Mutations' }
  & { createAuthor?: Maybe<(
    { __typename?: 'Author' }
    & Pick<Author, 'id' | 'name'>
  )> }
);

export type DeleteAuthorMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteAuthorMutation = (
  { __typename?: 'Mutations' }
  & { deleteAuthor?: Maybe<(
    { __typename?: 'Author' }
    & Pick<Author, 'id'>
  )> }
);

export type UpdateWorkMutationVariables = Exact<{
  id: Scalars['Int'];
  title: Scalars['String'];
  shortDescription: Scalars['String'];
  imgPath: Scalars['String'];
  task: Scalars['String'];
  html: Scalars['String'];
  date: Scalars['DateTime'];
  link: Scalars['String'];
}>;


export type UpdateWorkMutation = (
  { __typename?: 'Mutations' }
  & { updateWork?: Maybe<(
    { __typename?: 'Work' }
    & Pick<Work, 'id' | 'title'>
  )> }
);

export type CreateWorkMutationVariables = Exact<{
  title: Scalars['String'];
  shortDescription: Scalars['String'];
  date: Scalars['DateTime'];
  task: Scalars['String'];
  imgPath: Scalars['String'];
  html: Scalars['String'];
  link: Scalars['String'];
}>;


export type CreateWorkMutation = (
  { __typename?: 'Mutations' }
  & { createWork?: Maybe<(
    { __typename?: 'Work' }
    & Pick<Work, 'id' | 'title'>
  )> }
);

export type DeleteWorkMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteWorkMutation = (
  { __typename?: 'Mutations' }
  & { deleteWork?: Maybe<(
    { __typename?: 'Work' }
    & Pick<Work, 'id'>
  )> }
);

export type SecretQueryVariables = Exact<{ [key: string]: never; }>;


export type SecretQuery = (
  { __typename?: 'Queries' }
  & Pick<Queries, 'secretData'>
);

export type TypografTextQueryVariables = Exact<{
  text: Scalars['String'];
}>;


export type TypografTextQuery = (
  { __typename?: 'Queries' }
  & Pick<Queries, 'typografText'>
);


export const TagsByWorkIdDocument = gql`
    query tagsByWorkId($workId: Int!) {
  tagsByWorkId(workId: $workId) {
    id
    title
  }
}
    `;

/**
 * __useTagsByWorkIdQuery__
 *
 * To run a query within a React component, call `useTagsByWorkIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useTagsByWorkIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTagsByWorkIdQuery({
 *   variables: {
 *      workId: // value for 'workId'
 *   },
 * });
 */
export function useTagsByWorkIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TagsByWorkIdQuery, TagsByWorkIdQueryVariables>) {
        return ApolloReactHooks.useQuery<TagsByWorkIdQuery, TagsByWorkIdQueryVariables>(TagsByWorkIdDocument, baseOptions);
      }
export function useTagsByWorkIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TagsByWorkIdQuery, TagsByWorkIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<TagsByWorkIdQuery, TagsByWorkIdQueryVariables>(TagsByWorkIdDocument, baseOptions);
        }
export type TagsByWorkIdQueryHookResult = ReturnType<typeof useTagsByWorkIdQuery>;
export type TagsByWorkIdLazyQueryHookResult = ReturnType<typeof useTagsByWorkIdLazyQuery>;
export type TagsByWorkIdQueryResult = ApolloReactCommon.QueryResult<TagsByWorkIdQuery, TagsByWorkIdQueryVariables>;
export const AllTagsDocument = gql`
    query AllTags {
  tags {
    id
    title
  }
}
    `;

/**
 * __useAllTagsQuery__
 *
 * To run a query within a React component, call `useAllTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllTagsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllTagsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllTagsQuery, AllTagsQueryVariables>) {
        return ApolloReactHooks.useQuery<AllTagsQuery, AllTagsQueryVariables>(AllTagsDocument, baseOptions);
      }
export function useAllTagsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllTagsQuery, AllTagsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AllTagsQuery, AllTagsQueryVariables>(AllTagsDocument, baseOptions);
        }
export type AllTagsQueryHookResult = ReturnType<typeof useAllTagsQuery>;
export type AllTagsLazyQueryHookResult = ReturnType<typeof useAllTagsLazyQuery>;
export type AllTagsQueryResult = ApolloReactCommon.QueryResult<AllTagsQuery, AllTagsQueryVariables>;
export const ConnectDocument = gql`
    mutation connect($tagId: Int!, $workId: Int!) {
  connectTagAndWork(inputTagWork: {tagId: $tagId, workId: $workId}) {
    id
  }
}
    `;
export type ConnectMutationFn = ApolloReactCommon.MutationFunction<ConnectMutation, ConnectMutationVariables>;

/**
 * __useConnectMutation__
 *
 * To run a mutation, you first call `useConnectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConnectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [connectMutation, { data, loading, error }] = useConnectMutation({
 *   variables: {
 *      tagId: // value for 'tagId'
 *      workId: // value for 'workId'
 *   },
 * });
 */
export function useConnectMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ConnectMutation, ConnectMutationVariables>) {
        return ApolloReactHooks.useMutation<ConnectMutation, ConnectMutationVariables>(ConnectDocument, baseOptions);
      }
export type ConnectMutationHookResult = ReturnType<typeof useConnectMutation>;
export type ConnectMutationResult = ApolloReactCommon.MutationResult<ConnectMutation>;
export type ConnectMutationOptions = ApolloReactCommon.BaseMutationOptions<ConnectMutation, ConnectMutationVariables>;
export const DisconnectDocument = gql`
    mutation disconnect($tagId: Int!, $workId: Int!) {
  disconnectTagAndWork(inputTagWork: {tagId: $tagId, workId: $workId}) {
    id
  }
}
    `;
export type DisconnectMutationFn = ApolloReactCommon.MutationFunction<DisconnectMutation, DisconnectMutationVariables>;

/**
 * __useDisconnectMutation__
 *
 * To run a mutation, you first call `useDisconnectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDisconnectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [disconnectMutation, { data, loading, error }] = useDisconnectMutation({
 *   variables: {
 *      tagId: // value for 'tagId'
 *      workId: // value for 'workId'
 *   },
 * });
 */
export function useDisconnectMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DisconnectMutation, DisconnectMutationVariables>) {
        return ApolloReactHooks.useMutation<DisconnectMutation, DisconnectMutationVariables>(DisconnectDocument, baseOptions);
      }
export type DisconnectMutationHookResult = ReturnType<typeof useDisconnectMutation>;
export type DisconnectMutationResult = ApolloReactCommon.MutationResult<DisconnectMutation>;
export type DisconnectMutationOptions = ApolloReactCommon.BaseMutationOptions<DisconnectMutation, DisconnectMutationVariables>;
export const CreateTagDocument = gql`
    mutation createTag($title: String!) {
  createTag(inputTag: {title: $title, description: ""}) {
    id
  }
}
    `;
export type CreateTagMutationFn = ApolloReactCommon.MutationFunction<CreateTagMutation, CreateTagMutationVariables>;

/**
 * __useCreateTagMutation__
 *
 * To run a mutation, you first call `useCreateTagMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTagMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTagMutation, { data, loading, error }] = useCreateTagMutation({
 *   variables: {
 *      title: // value for 'title'
 *   },
 * });
 */
export function useCreateTagMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateTagMutation, CreateTagMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateTagMutation, CreateTagMutationVariables>(CreateTagDocument, baseOptions);
      }
export type CreateTagMutationHookResult = ReturnType<typeof useCreateTagMutation>;
export type CreateTagMutationResult = ApolloReactCommon.MutationResult<CreateTagMutation>;
export type CreateTagMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateTagMutation, CreateTagMutationVariables>;
export const DeleteTagDocument = gql`
    mutation deleteTag($id: Int!) {
  deleteTag(tagId: $id) {
    id
  }
}
    `;
export type DeleteTagMutationFn = ApolloReactCommon.MutationFunction<DeleteTagMutation, DeleteTagMutationVariables>;

/**
 * __useDeleteTagMutation__
 *
 * To run a mutation, you first call `useDeleteTagMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTagMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTagMutation, { data, loading, error }] = useDeleteTagMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTagMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteTagMutation, DeleteTagMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteTagMutation, DeleteTagMutationVariables>(DeleteTagDocument, baseOptions);
      }
export type DeleteTagMutationHookResult = ReturnType<typeof useDeleteTagMutation>;
export type DeleteTagMutationResult = ApolloReactCommon.MutationResult<DeleteTagMutation>;
export type DeleteTagMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteTagMutation, DeleteTagMutationVariables>;
export const WorksDocument = gql`
    query works {
  works {
    nodes {
      id
      title
      date
    }
  }
}
    `;

/**
 * __useWorksQuery__
 *
 * To run a query within a React component, call `useWorksQuery` and pass it any options that fit your needs.
 * When your component renders, `useWorksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWorksQuery({
 *   variables: {
 *   },
 * });
 */
export function useWorksQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<WorksQuery, WorksQueryVariables>) {
        return ApolloReactHooks.useQuery<WorksQuery, WorksQueryVariables>(WorksDocument, baseOptions);
      }
export function useWorksLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<WorksQuery, WorksQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<WorksQuery, WorksQueryVariables>(WorksDocument, baseOptions);
        }
export type WorksQueryHookResult = ReturnType<typeof useWorksQuery>;
export type WorksLazyQueryHookResult = ReturnType<typeof useWorksLazyQuery>;
export type WorksQueryResult = ApolloReactCommon.QueryResult<WorksQuery, WorksQueryVariables>;
export const WorkByIdDocument = gql`
    query workById($id: Int!) {
  workById(id: $id) {
    id
    title
    shortDescription
    date
    imgPath
    html
    link
    task
    authors {
      id
      name
      link
      role
    }
  }
}
    `;

/**
 * __useWorkByIdQuery__
 *
 * To run a query within a React component, call `useWorkByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useWorkByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWorkByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useWorkByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<WorkByIdQuery, WorkByIdQueryVariables>) {
        return ApolloReactHooks.useQuery<WorkByIdQuery, WorkByIdQueryVariables>(WorkByIdDocument, baseOptions);
      }
export function useWorkByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<WorkByIdQuery, WorkByIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<WorkByIdQuery, WorkByIdQueryVariables>(WorkByIdDocument, baseOptions);
        }
export type WorkByIdQueryHookResult = ReturnType<typeof useWorkByIdQuery>;
export type WorkByIdLazyQueryHookResult = ReturnType<typeof useWorkByIdLazyQuery>;
export type WorkByIdQueryResult = ApolloReactCommon.QueryResult<WorkByIdQuery, WorkByIdQueryVariables>;
export const CreateAuthorDocument = gql`
    mutation createAuthor($name: String!, $role: String!, $link: String!, $workId: Int!) {
  createAuthor(inputAuthor: {name: $name, role: $role, link: $link, workId: $workId}) {
    id
    name
  }
}
    `;
export type CreateAuthorMutationFn = ApolloReactCommon.MutationFunction<CreateAuthorMutation, CreateAuthorMutationVariables>;

/**
 * __useCreateAuthorMutation__
 *
 * To run a mutation, you first call `useCreateAuthorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAuthorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAuthorMutation, { data, loading, error }] = useCreateAuthorMutation({
 *   variables: {
 *      name: // value for 'name'
 *      role: // value for 'role'
 *      link: // value for 'link'
 *      workId: // value for 'workId'
 *   },
 * });
 */
export function useCreateAuthorMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateAuthorMutation, CreateAuthorMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateAuthorMutation, CreateAuthorMutationVariables>(CreateAuthorDocument, baseOptions);
      }
export type CreateAuthorMutationHookResult = ReturnType<typeof useCreateAuthorMutation>;
export type CreateAuthorMutationResult = ApolloReactCommon.MutationResult<CreateAuthorMutation>;
export type CreateAuthorMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateAuthorMutation, CreateAuthorMutationVariables>;
export const DeleteAuthorDocument = gql`
    mutation deleteAuthor($id: Int!) {
  deleteAuthor(authorId: $id) {
    id
  }
}
    `;
export type DeleteAuthorMutationFn = ApolloReactCommon.MutationFunction<DeleteAuthorMutation, DeleteAuthorMutationVariables>;

/**
 * __useDeleteAuthorMutation__
 *
 * To run a mutation, you first call `useDeleteAuthorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAuthorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAuthorMutation, { data, loading, error }] = useDeleteAuthorMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteAuthorMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteAuthorMutation, DeleteAuthorMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteAuthorMutation, DeleteAuthorMutationVariables>(DeleteAuthorDocument, baseOptions);
      }
export type DeleteAuthorMutationHookResult = ReturnType<typeof useDeleteAuthorMutation>;
export type DeleteAuthorMutationResult = ApolloReactCommon.MutationResult<DeleteAuthorMutation>;
export type DeleteAuthorMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteAuthorMutation, DeleteAuthorMutationVariables>;
export const UpdateWorkDocument = gql`
    mutation updateWork($id: Int!, $title: String!, $shortDescription: String!, $imgPath: String!, $task: String!, $html: String!, $date: DateTime!, $link: String!) {
  updateWork(inputWork: {id: $id, title: $title, shortDescription: $shortDescription, imgPath: $imgPath, task: $task, html: $html, date: $date, link: $link}) {
    id
    title
  }
}
    `;
export type UpdateWorkMutationFn = ApolloReactCommon.MutationFunction<UpdateWorkMutation, UpdateWorkMutationVariables>;

/**
 * __useUpdateWorkMutation__
 *
 * To run a mutation, you first call `useUpdateWorkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateWorkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateWorkMutation, { data, loading, error }] = useUpdateWorkMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      shortDescription: // value for 'shortDescription'
 *      imgPath: // value for 'imgPath'
 *      task: // value for 'task'
 *      html: // value for 'html'
 *      date: // value for 'date'
 *      link: // value for 'link'
 *   },
 * });
 */
export function useUpdateWorkMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateWorkMutation, UpdateWorkMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateWorkMutation, UpdateWorkMutationVariables>(UpdateWorkDocument, baseOptions);
      }
export type UpdateWorkMutationHookResult = ReturnType<typeof useUpdateWorkMutation>;
export type UpdateWorkMutationResult = ApolloReactCommon.MutationResult<UpdateWorkMutation>;
export type UpdateWorkMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateWorkMutation, UpdateWorkMutationVariables>;
export const CreateWorkDocument = gql`
    mutation createWork($title: String!, $shortDescription: String!, $date: DateTime!, $task: String!, $imgPath: String!, $html: String!, $link: String!) {
  createWork(inputWork: {title: $title, shortDescription: $shortDescription, date: $date, task: $task, imgPath: $imgPath, html: $html, link: $link}) {
    id
    title
  }
}
    `;
export type CreateWorkMutationFn = ApolloReactCommon.MutationFunction<CreateWorkMutation, CreateWorkMutationVariables>;

/**
 * __useCreateWorkMutation__
 *
 * To run a mutation, you first call `useCreateWorkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateWorkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createWorkMutation, { data, loading, error }] = useCreateWorkMutation({
 *   variables: {
 *      title: // value for 'title'
 *      shortDescription: // value for 'shortDescription'
 *      date: // value for 'date'
 *      task: // value for 'task'
 *      imgPath: // value for 'imgPath'
 *      html: // value for 'html'
 *      link: // value for 'link'
 *   },
 * });
 */
export function useCreateWorkMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateWorkMutation, CreateWorkMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateWorkMutation, CreateWorkMutationVariables>(CreateWorkDocument, baseOptions);
      }
export type CreateWorkMutationHookResult = ReturnType<typeof useCreateWorkMutation>;
export type CreateWorkMutationResult = ApolloReactCommon.MutationResult<CreateWorkMutation>;
export type CreateWorkMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateWorkMutation, CreateWorkMutationVariables>;
export const DeleteWorkDocument = gql`
    mutation deleteWork($id: Int!) {
  deleteWork(workId: $id) {
    id
  }
}
    `;
export type DeleteWorkMutationFn = ApolloReactCommon.MutationFunction<DeleteWorkMutation, DeleteWorkMutationVariables>;

/**
 * __useDeleteWorkMutation__
 *
 * To run a mutation, you first call `useDeleteWorkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteWorkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteWorkMutation, { data, loading, error }] = useDeleteWorkMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteWorkMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteWorkMutation, DeleteWorkMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteWorkMutation, DeleteWorkMutationVariables>(DeleteWorkDocument, baseOptions);
      }
export type DeleteWorkMutationHookResult = ReturnType<typeof useDeleteWorkMutation>;
export type DeleteWorkMutationResult = ApolloReactCommon.MutationResult<DeleteWorkMutation>;
export type DeleteWorkMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteWorkMutation, DeleteWorkMutationVariables>;
export const SecretDocument = gql`
    query Secret {
  secretData
}
    `;

/**
 * __useSecretQuery__
 *
 * To run a query within a React component, call `useSecretQuery` and pass it any options that fit your needs.
 * When your component renders, `useSecretQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSecretQuery({
 *   variables: {
 *   },
 * });
 */
export function useSecretQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SecretQuery, SecretQueryVariables>) {
        return ApolloReactHooks.useQuery<SecretQuery, SecretQueryVariables>(SecretDocument, baseOptions);
      }
export function useSecretLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SecretQuery, SecretQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SecretQuery, SecretQueryVariables>(SecretDocument, baseOptions);
        }
export type SecretQueryHookResult = ReturnType<typeof useSecretQuery>;
export type SecretLazyQueryHookResult = ReturnType<typeof useSecretLazyQuery>;
export type SecretQueryResult = ApolloReactCommon.QueryResult<SecretQuery, SecretQueryVariables>;
export const TypografTextDocument = gql`
    query typografText($text: String!) {
  typografText(text: $text)
}
    `;

/**
 * __useTypografTextQuery__
 *
 * To run a query within a React component, call `useTypografTextQuery` and pass it any options that fit your needs.
 * When your component renders, `useTypografTextQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTypografTextQuery({
 *   variables: {
 *      text: // value for 'text'
 *   },
 * });
 */
export function useTypografTextQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TypografTextQuery, TypografTextQueryVariables>) {
        return ApolloReactHooks.useQuery<TypografTextQuery, TypografTextQueryVariables>(TypografTextDocument, baseOptions);
      }
export function useTypografTextLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TypografTextQuery, TypografTextQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<TypografTextQuery, TypografTextQueryVariables>(TypografTextDocument, baseOptions);
        }
export type TypografTextQueryHookResult = ReturnType<typeof useTypografTextQuery>;
export type TypografTextLazyQueryHookResult = ReturnType<typeof useTypografTextLazyQuery>;
export type TypografTextQueryResult = ApolloReactCommon.QueryResult<TypografTextQuery, TypografTextQueryVariables>;