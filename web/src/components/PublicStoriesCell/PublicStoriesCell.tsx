import type { PublicStoriesQuery } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { formatTime, truncate } from 'src/lib/formatters'

export const QUERY = gql`
  query PublicStoriesQuery {
    publicStories {
      stories {
        id
        title
        content
        createdAt
        publicationId
        publication {
          name
          description
        }
        authorId
        author {
          name
          email
        }
      }
      count
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  publicStories,
}: CellSuccessProps<PublicStoriesQuery>) => {
  return (
    <div>
      <div className="mb-6 border-b py-10">
        <div className="text-3xl">Public Stories</div>
      </div>
      {publicStories.stories.map((story) => {
        return (
          <div key={story.id} className="mb-6 border-b pb-6">
            <div className="mb-2 flex items-center justify-start">
              <div className="mr-2 text-stone-800">{story.author.email}</div>
              <div className="text-stone-400">
                {formatTime(story.createdAt)}
              </div>
              {story.publicationId > 0 && (
                <div className="ml-4 text-stone-400">
                  In {story.publication?.name}
                </div>
              )}
            </div>
            <Link
              to={routes.story({ id: story.id })}
              title={'Show story ' + story.id + ' detail'}
              className="text-2xl text-stone-900"
            >
              {truncate(story.title)}
            </Link>
            <div className="text-lg text-stone-600">
              {truncate(story.shortContent)}
            </div>
          </div>
        )
      })}
    </div>
  )
}
