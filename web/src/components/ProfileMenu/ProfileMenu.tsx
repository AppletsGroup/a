import { Fragment } from 'react'

import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProfileMenu() {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  if (!isAuthenticated) return <Link to={routes.login()}>Login</Link>

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="inline-flex w-full items-center justify-center px-4 py-2 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
        {currentUser.email}
        <ChevronDownIcon
          className="-mr-1 ml-2 inline-block h-5 w-5"
          aria-hidden="true"
        />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              <Link
                to={routes.stories()}
                className="block w-full px-4 py-2 text-left text-sm"
              >
                Stories
              </Link>
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={logOut}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block w-full px-4 py-2 text-left text-sm'
                  )}
                >
                  Logout
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
