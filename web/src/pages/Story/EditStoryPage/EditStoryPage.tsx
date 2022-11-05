import EditStoryCell from 'src/components/Story/EditStoryCell'

type StoryPageProps = {
  id: number
}

const EditStoryPage = ({ id }: StoryPageProps) => {
  return <EditStoryCell id={id} />
}

export default EditStoryPage
