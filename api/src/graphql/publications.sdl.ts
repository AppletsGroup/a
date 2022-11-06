export const schema = gql`
  type Publication {
    id: Int!
    name: String!
    description: String!
    creator: User!
    creatorId: Int!
    isPublic: Boolean!
    stories(page: Int, pageSize: Int, where: StoriesWhereInput): [Story]!
    slug: String
    createdAt: DateTime!
  }

  type Query {
    publications: [Publication!]! @requireAuth
    publication(id: Int!): Publication @requireAuth
    publicPublication(slug: String!): Publication @skipAuth
  }

  input CreatePublicationInput {
    name: String!
    description: String!
    isPublic: Boolean!
    slug: String
  }

  input UpdatePublicationInput {
    name: String
    description: String
    creatorId: Int
    isPublic: Boolean
    slug: String!
  }

  type Mutation {
    createPublication(input: CreatePublicationInput!): Publication! @requireAuth
    updatePublication(id: Int!, input: UpdatePublicationInput!): Publication!
      @requireAuth
    deletePublication(id: Int!): Publication! @requireAuth
  }
`
