import type { FindStories } from 'types/graphql'

import StoryItem from 'src/components/StoryItem/StoryItem'

const StoriesList = ({ stories }: FindStories) => {
  return (
    <div>
      {stories.map((story) => (
        <StoryItem key={story.id} story={story} />
      ))}
    </div>
  )
}

export default StoriesList
