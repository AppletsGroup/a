import type { FindPublicationById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Publication from 'src/components/Publication/Publication'

export const QUERY = gql`
  query FindPublicationById($id: Int!) {
    publication: publication(id: $id) {
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

export const Empty = () => <div>Publication not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  publication,
}: CellSuccessProps<FindPublicationById>) => {
  return <Publication publication={publication} />
}
