import type { EditStoryById, UpdateStoryInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import StoryForm from 'src/components/Story/StoryForm'

export const QUERY = gql`
  query EditStoryById($id: Int!) {
    story: story(id: $id) {
      id
      title
      content
      isPublic
      publicationId
      createdAt
    }
  }
`
const UPDATE_STORY_MUTATION = gql`
  mutation UpdateStoryMutation($id: Int!, $input: UpdateStoryInput!) {
    updateStory(id: $id, input: $input) {
      id
      title
      content
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ story }: CellSuccessProps<EditStoryById>) => {
  const [updateStory, { loading, error }] = useMutation(UPDATE_STORY_MUTATION, {
    onCompleted: () => {
      toast.success('Story updated')
      navigate(routes.stories())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (
    input: UpdateStoryInput,
    id: EditStoryById['story']['id']
  ) => {
    updateStory({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Story {story?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <StoryForm
          story={story}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
