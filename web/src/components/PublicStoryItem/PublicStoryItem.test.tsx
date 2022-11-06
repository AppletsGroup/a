import { render } from '@redwoodjs/testing/web'

import PublicStoryItem from './PublicStoryItem'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PublicStoryItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PublicStoryItem />)
    }).not.toThrow()
  })
})
