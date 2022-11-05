import type { EditPublicationById, UpdatePublicationInput } from 'types/graphql'

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'
import type { RWGqlError } from '@redwoodjs/forms'

type FormPublication = NonNullable<EditPublicationById['publication']>

interface PublicationFormProps {
  publication?: EditPublicationById['publication']
  onSave: (data: UpdatePublicationInput, id?: FormPublication['id']) => void
  error: RWGqlError
  loading: boolean
}

const PublicationForm = (props: PublicationFormProps) => {
  const onSubmit = (data: FormPublication) => {
    if (!data.slug) delete data.slug
    props.onSave(data, props?.publication?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormPublication> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.publication?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>

        <TextField
          name="description"
          defaultValue={props.publication?.description}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="description" className="rw-field-error" />

        <Label
          name="slug"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Slug
        </Label>

        <TextField
          name="slug"
          defaultValue={props.publication?.slug}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="slug" className="rw-field-error" />

        <Label
          name="isPublic"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Is public
        </Label>

        <CheckboxField
          name="isPublic"
          defaultChecked={props.publication?.isPublic}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="isPublic" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default PublicationForm
