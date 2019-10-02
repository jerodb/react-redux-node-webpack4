import React from 'react'
import { shallow } from 'enzyme'
import CreateGame from './CreateGame.component'

describe('CreateGame Component unit tests', () => {
  it('Render without errors', () => {
    shallow(<CreateGame />)
  })
})
