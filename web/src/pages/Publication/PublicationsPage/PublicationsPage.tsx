import { Link, routes, navigate } from '@redwoodjs/router'

import Button from 'src/components/Button/Button'
import PublicationsCell from 'src/components/Publication/PublicationsCell'

const PublicationsPage = () => {
  const gotoNewPublication = () => {
    navigate(routes.newPublication())
  }

  return (
    <div>
      <header className="mb-6 flex justify-between border-b py-5">
        <h1>
          <Link to={routes.stories()} className="text-3xl">
            Publications
          </Link>
        </h1>
        <Button onClick={gotoNewPublication}>New Publication</Button>
      </header>
      <PublicationsCell />
    </div>
  )
}

export default PublicationsPage
