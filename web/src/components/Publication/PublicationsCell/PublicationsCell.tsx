import type { FindPublications } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Publications from 'src/components/Publication/Publications'

export const QUERY = gql`
  query FindPublications {
    publications {
      id
      name
      description
      creatorId
      isPublic
      slug
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No publications yet. '}
      <Link to={routes.newPublication()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  publications,
}: CellSuccessProps<FindPublications>) => {
  return <Publications publications={publications} />
}
