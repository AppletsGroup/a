import { useQuery } from '@redwoodjs/web'

const QUERY = gql`
  query FindPublicPublicationBySlug($slug: String!) {
    publicPublication(slug: $slug) {
      id
      name
    }
  }
`

const ServerlessHeartBeat = () => {
  useQuery(QUERY, {
    variables: { slug: '' },
    pollInterval: 56000,
  })
  console.log('SERVERLESS HEART BEAT!')

  return <></>
}

export default ServerlessHeartBeat
