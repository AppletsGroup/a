import { render } from '@redwoodjs/testing/web'

import PublicHeader from './PublicHeader'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PublicHeader', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PublicHeader />)
    }).not.toThrow()
  })
})
