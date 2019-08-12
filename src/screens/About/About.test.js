import React from 'react'
import { shallow } from 'enzyme'
import About from './AboutComponent'

describe('About Component', () => {
  it('Should render without errors', () => {
    shallow(<About />)
  })
})
