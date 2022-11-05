// import { Link, routes } from '@redwoodjs/router'

// import ProfileMenu from 'src/components/ProfileMenu/ProfileMenu'
import PublicHeader from 'src/components/PublicHeader/PublicHeader'

type PublicLayoutProps = {
  children?: React.ReactNode
}

const PublicLayout = ({ children }: PublicLayoutProps) => {
  return (
    <div className="w-full">
      {/* <header>
        <div className="my-4 flex justify-between">
          <h1>
            <Link to={routes.home()}>A</Link>
          </h1>
          <ProfileMenu />
        </div>
        <nav>
          <ul>
            <li>
              <Link to={routes.home()}>Home</Link>
            </li>
          </ul>
        </nav>
      </header> */}
      <PublicHeader />
      <main className="container mx-auto pt-6">{children}</main>
    </div>
  )
}

export default PublicLayout
