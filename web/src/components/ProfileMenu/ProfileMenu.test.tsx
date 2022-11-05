import { render } from '@redwoodjs/testing/web'

import ProfileMenu from './ProfileMenu'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ProfileMenu', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProfileMenu />)
    }).not.toThrow()
  })
})
