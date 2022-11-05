import type { FindStoryById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Story from 'src/components/Story/Story'

export const QUERY = gql`
  query FindStoryById($id: Int!) {
    story: story(id: $id) {
      id
      title
      content
      isPublic
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Story not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ story }: CellSuccessProps<FindStoryById>) => {
  return <Story story={story} />
}
