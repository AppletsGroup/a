import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import PublicationForm from 'src/components/Publication/PublicationForm'

import type { CreatePublicationInput } from 'types/graphql'

const CREATE_PUBLICATION_MUTATION = gql`
  mutation CreatePublicationMutation($input: CreatePublicationInput!) {
    createPublication(input: $input) {
      id
    }
  }
`

const NewPublication = () => {
  const [createPublication, { loading, error }] = useMutation(
    CREATE_PUBLICATION_MUTATION,
    {
      onCompleted: () => {
        toast.success('Publication created')
        navigate(routes.publications())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreatePublicationInput) => {
    createPublication({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Publication</h2>
      </header>
      <div className="rw-segment-main">
        <PublicationForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewPublication
