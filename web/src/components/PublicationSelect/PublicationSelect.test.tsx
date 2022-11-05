import { render } from '@redwoodjs/testing/web'

import PublicationSelect from './PublicationSelect'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PublicationSelect', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PublicationSelect />)
    }).not.toThrow()
  })
})
