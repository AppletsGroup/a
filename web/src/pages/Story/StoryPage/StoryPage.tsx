import StoryCell from 'src/components/Story/StoryCell'

type StoryPageProps = {
  id: number
}

const StoryPage = ({ id }: StoryPageProps) => {
  return <StoryCell id={id} />
}

export default StoryPage
