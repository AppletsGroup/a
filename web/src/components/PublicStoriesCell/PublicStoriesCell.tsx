import type { PublicStoriesQuery } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { formatTime, truncate } from 'src/lib/formatters'

import PublicStoryItem from '../PublicStoryItem/PublicStoryItem'

export const QUERY = gql`
  query PublicStoriesQuery {
    publicStories {
      stories {
        id
        title
        content
        shortContent
        createdAt
        publicationId
        publication {
          name
          description
        }
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
  publicStories,
}: CellSuccessProps<PublicStoriesQuery>) => {
  return (
    <div>
      <div className="mb-6 border-b py-10">
        <div className="text-3xl">Public Stories</div>
      </div>
      {publicStories.stories.map((story) => {
        return <PublicStoryItem key={story.id} story={story} />
      })}
    </div>
  )
}
