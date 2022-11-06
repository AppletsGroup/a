import { Link, routes } from '@redwoodjs/router'

import { formatTime, truncate } from 'src/lib/formatters'

const PublicStoryItem = ({ story, isSharing = false }) => {
  return (
    <div className="mb-6 border-b pb-6">
      <div className="mb-2 flex items-center justify-start">
        <div className="mr-2 text-stone-600">{story.author.email}</div>
        <div className="text-stone-400">{formatTime(story.createdAt)}</div>
        {story.publicationId > 0 && (
          <div className="ml-4 text-stone-400">
            In {story.publication?.name}
          </div>
        )}
      </div>
      <Link
        to={
          isSharing
            ? routes.storySharing({ id: story.id })
            : routes.story({ id: story.id })
        }
        title={'Show story ' + story.id + ' detail'}
        className="text-2xl text-stone-900"
      >
        {truncate(story.title)}
      </Link>
      <div className="mt-3 text-lg text-stone-600">
        {truncate(story.shortContent)}
      </div>
    </div>
  )
}

export default PublicStoryItem
