import PublicationCell from 'src/components/Publication/PublicationCell'
import PublicationStoriesCell from 'src/components/PublicationStoriesCell'

type PublicationPageProps = {
  id: number
}

const PublicationPage = ({ id }: PublicationPageProps) => {
  return (
    <>
      <div className="mb-6 border-b py-5">
        <PublicationCell id={id} />
      </div>
      <PublicationStoriesCell publicationId={id} page={1} />
    </>
  )
}

export default PublicationPage
