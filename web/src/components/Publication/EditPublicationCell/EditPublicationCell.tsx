import type { EditPublicationById, UpdatePublicationInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import PublicationForm from 'src/components/Publication/PublicationForm'

export const QUERY = gql`
  query EditPublicationById($id: Int!) {
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
const UPDATE_PUBLICATION_MUTATION = gql`
  mutation UpdatePublicationMutation(
    $id: Int!
    $input: UpdatePublicationInput!
  ) {
    updatePublication(id: $id, input: $input) {
      id
      name
      description
      creatorId
      isPublic
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  publication,
}: CellSuccessProps<EditPublicationById>) => {
  const [updatePublication, { loading, error }] = useMutation(
    UPDATE_PUBLICATION_MUTATION,
    {
      onCompleted: () => {
        toast.success('Publication updated')
        navigate(routes.publications())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdatePublicationInput,
    id: EditPublicationById['publication']['id']
  ) => {
    updatePublication({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Publication {publication?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <PublicationForm
          publication={publication}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
