import EditPublicationCell from 'src/components/Publication/EditPublicationCell'

type PublicationPageProps = {
  id: number
}

const EditPublicationPage = ({ id }: PublicationPageProps) => {
  return <EditPublicationCell id={id} />
}

export default EditPublicationPage
