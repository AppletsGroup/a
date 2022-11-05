export const schema = gql`
  type Story {
    id: Int!
    title: String!
    content: String!
    isPublic: Boolean!
    createdAt: DateTime!
    author: User
    authorId: Int!
    publicationId: Int
    publication: Publication
  }

  type StoryPage {
    stories: [Story!]!
    count: Int!
  }

  type Query {
    stories: [Story!]! @requireAuth
    story(id: Int!): Story @requireAuth
    storyPage(page: Int): StoryPage @requireAuth
    publicStories(page: Int): StoryPage @requireAuth
    publicationStories(page: Int, publicationId: Int): StoryPage @requireAuth
  }

  input CreateStoryInput {
    title: String!
    content: String!
    isPublic: Boolean
    publicationId: Int
  }

  input UpdateStoryInput {
    title: String
    content: String
    isPublic: Boolean
    publicationId: Int
  }

  type Mutation {
    createStory(input: CreateStoryInput!): Story! @requireAuth
    updateStory(id: Int!, input: UpdateStoryInput!): Story! @requireAuth
    deleteStory(id: Int!): Story! @requireAuth
  }
`
