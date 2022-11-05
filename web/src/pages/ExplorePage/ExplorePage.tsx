import { MetaTags } from '@redwoodjs/web'

import PublicStoriesCell from 'src/components/PublicStoriesCell'

const ExplorePage = () => {
  return (
    <>
      <MetaTags title="Explore" description="Explore page" />

      <PublicStoriesCell />
    </>
  )
}

export default ExplorePage
