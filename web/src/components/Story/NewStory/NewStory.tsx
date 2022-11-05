import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import StoryForm from 'src/components/Story/StoryForm'

import type { CreateStoryInput } from 'types/graphql'

const CREATE_STORY_MUTATION = gql`
  mutation CreateStoryMutation($input: CreateStoryInput!) {
    createStory(input: $input) {
      id
    }
  }
`

const NewStory = () => {
  const [createStory, { loading, error }] = useMutation(
    CREATE_STORY_MUTATION,
    {
      onCompleted: () => {
        toast.success('Story created')
        navigate(routes.stories())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateStoryInput) => {
    createStory({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Story</h2>
      </header>
      <div className="rw-segment-main">
        <StoryForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewStory
