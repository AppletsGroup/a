import { Menu } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import type { DeleteStoryMutationVariables, FindStoryById } from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import Dropdown from 'src/components/Dropdown/Dropdown'
import { formatTime } from 'src/lib/formatters'
import { classNames } from 'src/lib/style'

const DELETE_STORY_MUTATION = gql`
  mutation DeleteStoryMutation($id: Int!) {
    deleteStory(id: $id) {
      id
    }
  }
`

interface Props {
  story: NonNullable<FindStoryById['story']>
}

const Story = ({ story }: Props) => {
  const [deleteStory] = useMutation(DELETE_STORY_MUTATION, {
    onCompleted: () => {
      toast.success('Story deleted')
      navigate(routes.stories())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteStoryMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete story ' + id + '?')) {
      deleteStory({ variables: { id } })
    }
  }

  return (
    <>
      <div className="flex items-center">
        <div className="text-2xl">{story.title}</div>
        <div>
          <Dropdown
            overlay={
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to={routes.editStory({ id: story.id })}
                        title={'Edit story ' + story.id}
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
                        title={'Delete story ' + story.id}
                        onClick={() => onDeleteClick(story.id)}
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

      <div>{formatTime(story.createdAt)}</div>
      <div>{story.isPublic ? 'Public' : 'Private'}</div>
      <div>{story.content}</div>
    </>
  )
}

export default Story
