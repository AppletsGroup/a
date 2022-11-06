import { render } from '@redwoodjs/testing/web'

import StorySharingPage from './StorySharingPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('StorySharingPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StorySharingPage id={42}/>)
    }).not.toThrow()
  })
})
