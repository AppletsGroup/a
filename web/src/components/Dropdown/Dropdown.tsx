import { Fragment } from 'react'

import { Menu, Transition } from '@headlessui/react'

const Dropdown = ({ overlay, children }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="inline-flex w-full justify-center bg-white px-2 py-1 text-gray-900 focus:outline-none">
        {children}
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
        {overlay}
      </Transition>
    </Menu>
  )
}

export default Dropdown
