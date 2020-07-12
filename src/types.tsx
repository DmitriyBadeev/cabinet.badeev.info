import gql from "graphql-tag"
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string
    String: string
    Boolean: boolean
    Int: number
    Float: number
    /** The multiplier path scalar represents a valid GraphQL multiplier path string. */
    MultiplierPath: any
    PaginationAmount: any
    /** The `DateTime` scalar represents an ISO-8601 compliant date time type. */
    DateTime: any
}

export type Queries = {
    __typename?: "Queries"
    authors?: Maybe<Array<Maybe<Author>>>
    backendTags?: Maybe<Array<Maybe<Tag>>>
    frontendTags?: Maybe<Array<Maybe<Tag>>>
    tags?: Maybe<Array<Maybe<Tag>>>
    tagsByWorkId?: Maybe<Array<Maybe<Tag>>>
    workById?: Maybe<Work>
    works?: Maybe<WorkConnection>
    worksByTagIds?: Maybe<WorkConnection>
}

export type QueriesAuthorsArgs = {
    where?: Maybe<AuthorFilter>
}

export type QueriesTagsArgs = {
    where?: Maybe<TagFilter>
}

export type QueriesTagsByWorkIdArgs = {
    workId: Scalars["Int"]
}

export type QueriesWorkByIdArgs = {
    id: Scalars["Int"]
}

export type QueriesWorksArgs = {
    after?: Maybe<Scalars["String"]>
    before?: Maybe<Scalars["String"]>
    first?: Maybe<Scalars["PaginationAmount"]>
    last?: Maybe<Scalars["PaginationAmount"]>
}

export type QueriesWorksByTagIdsArgs = {
    after?: Maybe<Scalars["String"]>
    before?: Maybe<Scalars["String"]>
    first?: Maybe<Scalars["PaginationAmount"]>
    last?: Maybe<Scalars["PaginationAmount"]>
    tagIds?: Maybe<Array<Scalars["Int"]>>
}

export type Mutations = {
    __typename?: "Mutations"
    addBackendTag?: Maybe<BackendTag>
    addFrontendTag?: Maybe<FrontendTag>
    connectTagAndWork?: Maybe<TagWork>
    createAuthor?: Maybe<Author>
    createTag?: Maybe<Tag>
    createWork?: Maybe<Work>
    deleteAuthor?: Maybe<Author>
    deleteBackendTag?: Maybe<BackendTag>
    deleteFrontendTag?: Maybe<FrontendTag>
    deleteTag?: Maybe<Tag>
    deleteWork?: Maybe<Work>
    disconnectTagAndWork?: Maybe<TagWork>
    updateAuthor?: Maybe<Author>
    updateTag?: Maybe<Tag>
    updateWork?: Maybe<Work>
}

export type MutationsAddBackendTagArgs = {
    tagId: Scalars["Int"]
}

export type MutationsAddFrontendTagArgs = {
    tagId: Scalars["Int"]
}

export type MutationsConnectTagAndWorkArgs = {
    inputTagWork?: Maybe<ConnectTagWorkInput>
}

export type MutationsCreateAuthorArgs = {
    inputAuthor?: Maybe<CreateAuthorInput>
}

export type MutationsCreateTagArgs = {
    inputTag?: Maybe<CreateTagInput>
}

export type MutationsCreateWorkArgs = {
    inputWork?: Maybe<CreateWorkInput>
}

export type MutationsDeleteAuthorArgs = {
    authorId: Scalars["Int"]
}

export type MutationsDeleteBackendTagArgs = {
    tagId: Scalars["Int"]
}

export type MutationsDeleteFrontendTagArgs = {
    tagId: Scalars["Int"]
}

export type MutationsDeleteTagArgs = {
    tagId: Scalars["Int"]
}

export type MutationsDeleteWorkArgs = {
    workId: Scalars["Int"]
}

export type MutationsDisconnectTagAndWorkArgs = {
    inputTagWork?: Maybe<ConnectTagWorkInput>
}

export type MutationsUpdateAuthorArgs = {
    inputAuthor?: Maybe<UpdateAuthorInput>
}

export type MutationsUpdateTagArgs = {
    inputTag?: Maybe<UpdateTagInput>
}

export type MutationsUpdateWorkArgs = {
    inputWork?: Maybe<UpdateWorkInput>
}

export type Work = {
    __typename?: "Work"
    authors?: Maybe<Array<Maybe<Author>>>
    countViews: Scalars["Int"]
    date: Scalars["DateTime"]
    html?: Maybe<Scalars["String"]>
    id: Scalars["Int"]
    imgPath?: Maybe<Scalars["String"]>
    link?: Maybe<Scalars["String"]>
    shortDescription?: Maybe<Scalars["String"]>
    tags?: Maybe<Array<Maybe<TagWork>>>
    task?: Maybe<Scalars["String"]>
    title?: Maybe<Scalars["String"]>
}

/** A connection to a list of items. */
export type WorkConnection = {
    __typename?: "WorkConnection"
    /** A list of edges. */
    edges?: Maybe<Array<WorkEdge>>
    /** A flattened list of the nodes. */
    nodes?: Maybe<Array<Maybe<Work>>>
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    totalCount: Scalars["Int"]
}

export type TagFilter = {
    AND?: Maybe<Array<TagFilter>>
    description?: Maybe<Scalars["String"]>
    description_contains?: Maybe<Scalars["String"]>
    description_ends_with?: Maybe<Scalars["String"]>
    description_in?: Maybe<Array<Maybe<Scalars["String"]>>>
    description_not?: Maybe<Scalars["String"]>
    description_not_contains?: Maybe<Scalars["String"]>
    description_not_ends_with?: Maybe<Scalars["String"]>
    description_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>
    description_not_starts_with?: Maybe<Scalars["String"]>
    description_starts_with?: Maybe<Scalars["String"]>
    id?: Maybe<Scalars["Int"]>
    id_gt?: Maybe<Scalars["Int"]>
    id_gte?: Maybe<Scalars["Int"]>
    id_in?: Maybe<Array<Scalars["Int"]>>
    id_lt?: Maybe<Scalars["Int"]>
    id_lte?: Maybe<Scalars["Int"]>
    id_not?: Maybe<Scalars["Int"]>
    id_not_gt?: Maybe<Scalars["Int"]>
    id_not_gte?: Maybe<Scalars["Int"]>
    id_not_in?: Maybe<Array<Scalars["Int"]>>
    id_not_lt?: Maybe<Scalars["Int"]>
    id_not_lte?: Maybe<Scalars["Int"]>
    OR?: Maybe<Array<TagFilter>>
    title?: Maybe<Scalars["String"]>
    title_contains?: Maybe<Scalars["String"]>
    title_ends_with?: Maybe<Scalars["String"]>
    title_in?: Maybe<Array<Maybe<Scalars["String"]>>>
    title_not?: Maybe<Scalars["String"]>
    title_not_contains?: Maybe<Scalars["String"]>
    title_not_ends_with?: Maybe<Scalars["String"]>
    title_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>
    title_not_starts_with?: Maybe<Scalars["String"]>
    title_starts_with?: Maybe<Scalars["String"]>
}

export type AuthorFilter = {
    AND?: Maybe<Array<AuthorFilter>>
    id?: Maybe<Scalars["Int"]>
    id_gt?: Maybe<Scalars["Int"]>
    id_gte?: Maybe<Scalars["Int"]>
    id_in?: Maybe<Array<Scalars["Int"]>>
    id_lt?: Maybe<Scalars["Int"]>
    id_lte?: Maybe<Scalars["Int"]>
    id_not?: Maybe<Scalars["Int"]>
    id_not_gt?: Maybe<Scalars["Int"]>
    id_not_gte?: Maybe<Scalars["Int"]>
    id_not_in?: Maybe<Array<Scalars["Int"]>>
    id_not_lt?: Maybe<Scalars["Int"]>
    id_not_lte?: Maybe<Scalars["Int"]>
    link?: Maybe<Scalars["String"]>
    link_contains?: Maybe<Scalars["String"]>
    link_ends_with?: Maybe<Scalars["String"]>
    link_in?: Maybe<Array<Maybe<Scalars["String"]>>>
    link_not?: Maybe<Scalars["String"]>
    link_not_contains?: Maybe<Scalars["String"]>
    link_not_ends_with?: Maybe<Scalars["String"]>
    link_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>
    link_not_starts_with?: Maybe<Scalars["String"]>
    link_starts_with?: Maybe<Scalars["String"]>
    name?: Maybe<Scalars["String"]>
    name_contains?: Maybe<Scalars["String"]>
    name_ends_with?: Maybe<Scalars["String"]>
    name_in?: Maybe<Array<Maybe<Scalars["String"]>>>
    name_not?: Maybe<Scalars["String"]>
    name_not_contains?: Maybe<Scalars["String"]>
    name_not_ends_with?: Maybe<Scalars["String"]>
    name_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>
    name_not_starts_with?: Maybe<Scalars["String"]>
    name_starts_with?: Maybe<Scalars["String"]>
    OR?: Maybe<Array<AuthorFilter>>
    role?: Maybe<Scalars["String"]>
    role_contains?: Maybe<Scalars["String"]>
    role_ends_with?: Maybe<Scalars["String"]>
    role_in?: Maybe<Array<Maybe<Scalars["String"]>>>
    role_not?: Maybe<Scalars["String"]>
    role_not_contains?: Maybe<Scalars["String"]>
    role_not_ends_with?: Maybe<Scalars["String"]>
    role_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>
    role_not_starts_with?: Maybe<Scalars["String"]>
    role_starts_with?: Maybe<Scalars["String"]>
    workId?: Maybe<Scalars["Int"]>
    workId_gt?: Maybe<Scalars["Int"]>
    workId_gte?: Maybe<Scalars["Int"]>
    workId_in?: Maybe<Array<Scalars["Int"]>>
    workId_lt?: Maybe<Scalars["Int"]>
    workId_lte?: Maybe<Scalars["Int"]>
    workId_not?: Maybe<Scalars["Int"]>
    workId_not_gt?: Maybe<Scalars["Int"]>
    workId_not_gte?: Maybe<Scalars["Int"]>
    workId_not_in?: Maybe<Array<Scalars["Int"]>>
    workId_not_lt?: Maybe<Scalars["Int"]>
    workId_not_lte?: Maybe<Scalars["Int"]>
}

/** Information about pagination in a connection. */
export type PageInfo = {
    __typename?: "PageInfo"
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Maybe<Scalars["String"]>
    /** Indicates whether more edges exist following the set defined by the clients arguments. */
    hasNextPage: Scalars["Boolean"]
    /** Indicates whether more edges exist prior the set defined by the clients arguments. */
    hasPreviousPage: Scalars["Boolean"]
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Maybe<Scalars["String"]>
}

/** An edge in a connection. */
export type WorkEdge = {
    __typename?: "WorkEdge"
    /** A cursor for use in pagination. */
    cursor: Scalars["String"]
    /** The item at the end of the edge. */
    node?: Maybe<Work>
}

export type Tag = {
    __typename?: "Tag"
    description?: Maybe<Scalars["String"]>
    id: Scalars["Int"]
    title?: Maybe<Scalars["String"]>
    works?: Maybe<Array<Maybe<TagWork>>>
}

export type Author = {
    __typename?: "Author"
    id: Scalars["Int"]
    link?: Maybe<Scalars["String"]>
    name?: Maybe<Scalars["String"]>
    role?: Maybe<Scalars["String"]>
    work?: Maybe<Work>
    workId: Scalars["Int"]
}

export type CreateWorkInput = {
    date: Scalars["DateTime"]
    html?: Maybe<Scalars["String"]>
    imgPath?: Maybe<Scalars["String"]>
    link?: Maybe<Scalars["String"]>
    shortDescription?: Maybe<Scalars["String"]>
    task?: Maybe<Scalars["String"]>
    title?: Maybe<Scalars["String"]>
}

export type UpdateWorkInput = {
    date?: Maybe<Scalars["DateTime"]>
    html?: Maybe<Scalars["String"]>
    id: Scalars["Int"]
    imgPath?: Maybe<Scalars["String"]>
    link?: Maybe<Scalars["String"]>
    shortDescription?: Maybe<Scalars["String"]>
    task?: Maybe<Scalars["String"]>
    title?: Maybe<Scalars["String"]>
}

export type CreateTagInput = {
    description?: Maybe<Scalars["String"]>
    title?: Maybe<Scalars["String"]>
}

export type ConnectTagWorkInput = {
    tagId: Scalars["Int"]
    workId: Scalars["Int"]
}

export type UpdateTagInput = {
    description?: Maybe<Scalars["String"]>
    id: Scalars["Int"]
    title?: Maybe<Scalars["String"]>
}

export type TagWork = {
    __typename?: "TagWork"
    id: Scalars["Int"]
    tag?: Maybe<Tag>
    tagId: Scalars["Int"]
    work?: Maybe<Work>
    workId: Scalars["Int"]
}

export type FrontendTag = {
    __typename?: "FrontendTag"
    id: Scalars["Int"]
    tag?: Maybe<Tag>
    tagId: Scalars["Int"]
}

export type BackendTag = {
    __typename?: "BackendTag"
    id: Scalars["Int"]
    tag?: Maybe<Tag>
    tagId: Scalars["Int"]
}

export type CreateAuthorInput = {
    link?: Maybe<Scalars["String"]>
    name?: Maybe<Scalars["String"]>
    role?: Maybe<Scalars["String"]>
    workId: Scalars["Int"]
}

export type UpdateAuthorInput = {
    id: Scalars["Int"]
    link?: Maybe<Scalars["String"]>
    name?: Maybe<Scalars["String"]>
    role?: Maybe<Scalars["String"]>
    workId?: Maybe<Scalars["Int"]>
}

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never }>

export type Unnamed_1_Query = { __typename?: "Queries" } & {
    works?: Maybe<
        { __typename?: "WorkConnection" } & {
            nodes?: Maybe<Array<Maybe<{ __typename?: "Work" } & Pick<Work, "id" | "title">>>>
        }
    >
}
