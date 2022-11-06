import { MetaTags, useQuery } from '@redwoodjs/web'

import PublicStoryItem from 'src/components/PublicStoryItem/PublicStoryItem'

type PublicationSharingPageProps = {
  slug: string
}

const QUERY = gql`
  query FindPublicPublicationBySlug($slug: String!) {
    publicPublication(slug: $slug) {
      id
      name
      description
      stories {
        id
        title
        content
        shortContent
        author {
          id
          email
        }
      }
    }
  }
`

const PublicationSharingPage = ({ slug }: PublicationSharingPageProps) => {
  const { loading, error, data } = useQuery(QUERY, {
    variables: { slug },
  })

  if (loading || error) return <></>
  const { publicPublication } = data

  if (!publicPublication) {
    return <>Publication can not found.</>
  }

  return (
    <>
      <MetaTags
        title="PublicationSharing"
        description="PublicationSharing page"
      />

      <div className="mx-auto mt-10 max-w-xl">
        <h1 className="mb-5 border-b py-3 text-3xl">
          {publicPublication.name}
        </h1>

        {publicPublication.stories.map((story) => {
          return (
            <PublicStoryItem key={story.id} story={story} isSharing={true} />
          )
        })}
      </div>
    </>
  )
}

export default PublicationSharingPage
