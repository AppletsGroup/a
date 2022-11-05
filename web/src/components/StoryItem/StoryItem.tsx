import { Menu } from '@headlessui/react'
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline'
import type { DeleteStoryMutationVariables, FindStories } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import Dropdown from 'src/components/Dropdown/Dropdown'
import { QUERY } from 'src/components/Story/StoriesCell'
import { formatTime, truncate } from 'src/lib/formatters'
import { classNames } from 'src/lib/style'

const DELETE_STORY_MUTATION = gql`
  mutation DeleteStoryMutation($id: Int!) {
    deleteStory(id: $id) {
      id
    }
  }
`

const StoryItem = ({ story, withoutPublication = false }) => {
  const [deleteStory] = useMutation(DELETE_STORY_MUTATION, {
    onCompleted: () => {
      toast.success('Story deleted')
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

  const onDeleteClick = (id: DeleteStoryMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete story ' + id + '?')) {
      deleteStory({ variables: { id } })
    }
  }

  return (
    <div className="mb-6 border-b pb-6">
      <Link
        to={routes.story({ id: story.id })}
        title={'Show story ' + story.id + ' detail'}
        className="text-2xl text-stone-900"
      >
        {truncate(story.title)}
      </Link>
      <div className="text-lg text-stone-600">{truncate(story.content)}</div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start">
          <div className="text-stone-400">{formatTime(story.createdAt)}</div>
          {!withoutPublication && story.publicationId > 0 && (
            <div className="ml-4 text-stone-400">
              In {story.publication?.name}
            </div>
          )}
        </div>
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
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
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
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
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
          <EllipsisHorizontalIcon className="h-6 w-6" aria-hidden="true" />
        </Dropdown>
      </div>
    </div>
  )
}

export default StoryItem
