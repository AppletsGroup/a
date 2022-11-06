export const schema = gql`
  type Story {
    id: Int!
    title: String!
    content: String!
    shortContent: String
    isPublic: Boolean!
    createdAt: DateTime!
    author: User
    authorId: Int!
    publicationId: Int
    publication: Publication
  }

  input StoriesWhereInput {
    title: String
    isPublic: Boolean
  }

  type PagedStories {
    stories: [Story!]!
    count: Int!
  }

  type Query {
    stories: [Story!]! @requireAuth
    story(id: Int!): Story @requireAuth
    publicStory(id: Int!): Story @skipAuth
    storyPage(page: Int): PagedStories @requireAuth
    publicStories(
      page: Int
      pageSize: Int
      where: StoriesWhereInput
    ): PagedStories @requireAuth
    publicationStories(page: Int, publicationId: Int): PagedStories @requireAuth
  }

  input CreateStoryInput {
    title: String!
    content: String!
    isPublic: Boolean
    publicationId: Int
    shortContent: String
  }

  input UpdateStoryInput {
    title: String
    content: String
    isPublic: Boolean
    publicationId: Int
    shortContent: String
  }

  type Mutation {
    createStory(input: CreateStoryInput!): Story! @requireAuth
    updateStory(id: Int!, input: UpdateStoryInput!): Story! @requireAuth
    deleteStory(id: Int!): Story! @requireAuth
  }
`
