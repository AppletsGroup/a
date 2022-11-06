import { Menu } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import type {
  DeletePublicationMutationVariables,
  FindPublicationById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import Dropdown from 'src/components/Dropdown/Dropdown'
import { classNames } from 'src/lib/style'

const DELETE_PUBLICATION_MUTATION = gql`
  mutation DeletePublicationMutation($id: Int!) {
    deletePublication(id: $id) {
      id
    }
  }
`

interface Props {
  publication: NonNullable<FindPublicationById['publication']>
}

const Publication = ({ publication }: Props) => {
  const [deletePublication] = useMutation(DELETE_PUBLICATION_MUTATION, {
    onCompleted: () => {
      toast.success('Publication deleted')
      navigate(routes.publications())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeletePublicationMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete publication ' + id + '?')) {
      deletePublication({ variables: { id } })
    }
  }

  const handleCopySharingLink = () => {
    navigator.clipboard.writeText(
      `http://${window.location.host}/publications/${publication?.slug}`
    )
  }

  return (
    <>
      <div className="flex items-center">
        <div className="text-2xl">{publication.name}</div>
        <div>
          <Dropdown
            overlay={
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to={routes.editPublication({ id: publication.id })}
                        title={'Edit publication ' + publication.id}
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Edit
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to={routes.publicationSharing({
                          slug: publication.slug,
                        })}
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Goto Public Page
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        type="button"
                        title={'Share publication ' + publication.id}
                        onClick={handleCopySharingLink}
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block w-full px-4	py-2 text-left text-sm'
                        )}
                      >
                        Copy Sharing Link
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        type="button"
                        title={'Delete publication ' + publication.id}
                        onClick={() => onDeleteClick(publication.id)}
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block w-full px-4	py-2 text-left text-sm text-red-400'
                        )}
                      >
                        Delete
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            }
          >
            <ChevronDownIcon className="h-6 w-6" aria-hidden="true" />
          </Dropdown>
        </div>
      </div>
      <div>{publication.description}</div>
      <div>{publication.isPublic ? 'Public' : 'Private'}</div>
    </>
  )
}

export default Publication
