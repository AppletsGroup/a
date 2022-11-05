import type { PublicationStoriesQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import StoryItem from 'src/components/StoryItem/StoryItem'

export const QUERY = gql`
  query PublicationStoriesQuery($page: Int!, $publicationId: Int!) {
    publicationStories(page: $page, publicationId: $publicationId) {
      stories {
        id
        title
        content
        createdAt
        publicationId
        authorId
        author {
          name
          email
        }
      }
      count
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  publicationStories,
}: CellSuccessProps<PublicationStoriesQuery>) => {
  return (
    <ul>
      {publicationStories.stories.map((story) => {
        return (
          <StoryItem key={story.id} story={story} withoutPublication={true} />
        )
      })}
    </ul>
  )
}
