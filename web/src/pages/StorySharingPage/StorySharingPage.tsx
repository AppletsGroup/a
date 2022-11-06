import { MetaTags, useQuery } from '@redwoodjs/web'

import NonePubContent from 'src/components/NonePubContent/NonePubContent'

type StorySharingPageProps = {
  id: number
}

const QUERY = gql`
  query FindPublicStoryById($id: Int!) {
    publicStory(id: $id) {
      id
      title
      content
      isPublic
      createdAt
    }
  }
`

const StorySharingPage = ({ id }: StorySharingPageProps) => {
  const { loading, error, data } = useQuery(QUERY, {
    variables: { id },
  })

  if (loading || error) return <></>
  const { publicStory } = data

  if (!publicStory) {
    return <>Story can not found.</>
  }

  return (
    <>
      <MetaTags title="StorySharing" description="StorySharing page" />

      <div className="mx-auto mt-10 max-w-xl">
        <div className="pl-4 text-2xl">{publicStory.title}</div>
        <NonePubContent story={publicStory} />
      </div>
    </>
  )
}

export default StorySharingPage
