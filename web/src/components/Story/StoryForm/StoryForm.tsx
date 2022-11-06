import { useState } from 'react'

import { useEditor, defaultPreset } from 'nonepub'
import type { EditStoryById, UpdateStoryInput } from 'types/graphql'

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
  CheckboxField,
} from '@redwoodjs/forms'
import type { RWGqlError } from '@redwoodjs/forms'

import PublicationSelect from 'src/components/PublicationSelect/PublicationSelect'

import NonePubEditor from './Editor'

type FormStory = NonNullable<EditStoryById['story']>

interface StoryFormProps {
  story?: EditStoryById['story']
  onSave: (data: UpdateStoryInput, id?: FormStory['id']) => void
  error: RWGqlError
  loading: boolean
}

const StoryForm = (props: StoryFormProps) => {
  const [publicationId, setPublicationId] = useState(props.story?.publicationId)

  const options = defaultPreset(
    {
      type: 'html',
      value: props?.story?.content || '',
    },
    {
      uploader: async () => {
        return {
          src: '',
        }
      },
      readonly: false,
    }
  )
  const editor = useEditor(options)

  const onSubmit = (data: FormStory) => {
    const htmlString = editor.getContentHtml()
    const shortContent = htmlString.replace(/<[^>]+>/g, ' ').substring(0, 100)
    data.content = htmlString
    data.publicationId = publicationId
    data.shortContent = shortContent
    props.onSave(data, props?.story?.id)
  }

  const handlePublicationChange = (selectedPublication) => {
    setPublicationId(selectedPublication.id)
  }

  return (
    <div className="container">
      <Form<FormStory>
        onSubmit={onSubmit}
        error={props.error}
        className="mx-auto max-w-xl"
      >
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <div className="flex items-center border-b pb-5">
          <Label name="isPublic" className="mr-2">
            Is Public
          </Label>{' '}
          <CheckboxField
            name="isPublic"
            defaultChecked={props.story?.isPublic}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <PublicationSelect
            defaultValue={props.story?.publicationId}
            onChange={handlePublicationChange}
          />
          <Submit
            disabled={props.loading}
            className="rw-button rw-button-blue ml-auto"
          >
            Save
          </Submit>
        </div>

        <TextField
          name="title"
          defaultValue={props.story?.title}
          className="rw-input border-0 outline-none placeholder:text-2xl focus:border-0 focus:shadow-none focus:outline-none focus:ring-0"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
          placeholder="Title"
        />

        <FieldError name="title" className="rw-field-error" />

        {/* <Label
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

        <FieldError name="content" className="rw-field-error" /> */}
        <NonePubEditor editor={editor} />
      </Form>
    </div>
  )
}

export default StoryForm
