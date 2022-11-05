import { Link, routes, navigate } from '@redwoodjs/router'

import Button from 'src/components/Button/Button'
import StoriesCell from 'src/components/Story/StoriesCell'

const StoriesPage = () => {
  const gotoNewStory = () => {
    navigate(routes.newStory())
  }

  return (
    <div>
      <header className="mb-6 flex justify-between border-b py-5">
        <h1>
          <Link to={routes.stories()} className="text-3xl">
            Stories
          </Link>
        </h1>
        <Button onClick={gotoNewStory}>New Story</Button>
      </header>
      <StoriesCell />
    </div>
  )
}

export default StoriesPage
