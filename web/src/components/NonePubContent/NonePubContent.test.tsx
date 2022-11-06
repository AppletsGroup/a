import { render } from '@redwoodjs/testing/web'

import NonePubContent from './NonePubContent'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NonePubContent', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NonePubContent />)
    }).not.toThrow()
  })
})
