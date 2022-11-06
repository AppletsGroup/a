import type { FindStories } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Stories from 'src/components/Story/Stories'

export const QUERY = gql`
  query FindStories {
    stories {
      id
      title
      content
      shortContent
      createdAt
      publicationId
      publication {
        id
        name
        description
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No stories yet. '}
      <Link to={routes.newStory()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ stories }: CellSuccessProps<FindStories>) => {
  return <Stories stories={stories} />
}
