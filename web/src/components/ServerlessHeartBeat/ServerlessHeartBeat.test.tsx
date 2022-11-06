import { render } from '@redwoodjs/testing/web'

import ServerlessHeartBeat from './ServerlessHeartBeat'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ServerlessHeartBeat', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ServerlessHeartBeat />)
    }).not.toThrow()
  })
})
