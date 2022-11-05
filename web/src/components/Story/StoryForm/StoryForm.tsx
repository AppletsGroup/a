import { useState } from 'react'

import type { EditStoryById, UpdateStoryInput } from 'types/graphql'

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
  TextAreaField,
  CheckboxField,
} from '@redwoodjs/forms'
import type { RWGqlError } from '@redwoodjs/forms'

import PublicationSelect from 'src/components/PublicationSelect/PublicationSelect'

type FormStory = NonNullable<EditStoryById['story']>

interface StoryFormProps {
  story?: EditStoryById['story']
  onSave: (data: UpdateStoryInput, id?: FormStory['id']) => void
  error: RWGqlError
  loading: boolean
}

const StoryForm = (props: StoryFormProps) => {
  const [publicationId, setPublicationId] = useState(props.story?.publicationId)

  const onSubmit = (data: FormStory) => {
    data.publicationId = publicationId
    props.onSave(data, props?.story?.id)
  }

  const handlePublicationChange = (selectedPublication) => {
    setPublicationId(selectedPublication.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormStory> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>

        <TextField
          name="title"
          defaultValue={props.story?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="title" className="rw-field-error" />

        <Label
          name="content"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Content
        </Label>

        <TextAreaField
          name="content"
          rows={6}
          defaultValue={props.story?.content}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="content" className="rw-field-error" />

        <PublicationSelect
          defaultValue={props.story?.publicationId}
          onChange={handlePublicationChange}
        />

        <Label
          name="isPublic"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Is Public
        </Label>

        <CheckboxField
          name="isPublic"
          defaultChecked={props.story?.isPublic}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default StoryForm
