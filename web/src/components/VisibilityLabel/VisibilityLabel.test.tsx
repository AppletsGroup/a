import { render } from '@redwoodjs/testing/web'

import VisibilityLabel from './VisibilityLabel'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('VisibilityLabel', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<VisibilityLabel />)
    }).not.toThrow()
  })
})
