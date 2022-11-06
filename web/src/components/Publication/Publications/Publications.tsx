import { Menu } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import type {
  DeletePublicationMutationVariables,
  FindPublications,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import Dropdown from 'src/components/Dropdown/Dropdown'
import { QUERY } from 'src/components/Publication/PublicationsCell'
import VisibilityLabel from 'src/components/VisibilityLabel/VisibilityLabel'
import { truncate } from 'src/lib/formatters'
import { classNames } from 'src/lib/style'

const DELETE_PUBLICATION_MUTATION = gql`
  mutation DeletePublicationMutation($id: Int!) {
    deletePublication(id: $id) {
      id
    }
  }
`

const PublicationsList = ({ publications }: FindPublications) => {
  const [deletePublication] = useMutation(DELETE_PUBLICATION_MUTATION, {
    onCompleted: () => {
      toast.success('Publication deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeletePublicationMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete publication ' + id + '?')) {
      deletePublication({ variables: { id } })
    }
  }

  return (
    <>
      {publications.map((publication) => (
        <div
          key={publication.id}
          className="mb-6 flex items-center justify-between border-b pb-6"
        >
          <div>
            <div className="mb-2 flex items-center">
              <Link
                to={routes.publication({ id: publication.id })}
                className="mr-3 text-xl text-stone-900"
              >
                {truncate(publication.name)}
              </Link>
              <VisibilityLabel isPublic={publication.isPublic} />
            </div>
            <div className="text-lg text-stone-600">
              {truncate(publication.description)}
            </div>
          </div>
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
      ))}
    </>
  )
}

export default PublicationsList
