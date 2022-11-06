import { render } from '@redwoodjs/testing/web'

import PublicationSharingPage from './PublicationSharingPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PublicationSharingPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PublicationSharingPage id={42}/>)
    }).not.toThrow()
  })
})
