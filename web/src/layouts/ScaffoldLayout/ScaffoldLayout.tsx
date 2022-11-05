import {
  DocumentTextIcon,
  PencilSquareIcon,
  BookOpenIcon,
} from '@heroicons/react/24/outline'

import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type LayoutProps = {
  children: React.ReactNode
}

const ScaffoldLayout = ({ children }: LayoutProps) => {
  const { currentUser } = useAuth()

  return (
    <div className="container mx-auto h-screen w-full">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <div className="flex h-screen justify-center">
        <div className="sticky top-0 flex h-screen flex-col items-center justify-between border-r py-10 pr-6">
          <Link to={routes.home()} className="text-3xl">
            A
          </Link>
          <nav>
            <ul>
              <li>
                <Link to={routes.stories()}>
                  <PencilSquareIcon className="h-6 w-6" />
                </Link>
              </li>
              <li className="mt-8">
                <Link to={routes.explore()}>
                  <DocumentTextIcon className="h-6 w-6" />
                </Link>
              </li>
              <li className="mt-8">
                <Link to={routes.publications()}>
                  <BookOpenIcon className="h-6 w-6" />
                </Link>
              </li>
            </ul>
          </nav>
          <div>{currentUser.email}</div>
        </div>
        <div className="h-screen w-full overflow-auto pl-20">
          <div className="mx-auto max-w-3xl pt-2">
            <main>{children}</main>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScaffoldLayout
