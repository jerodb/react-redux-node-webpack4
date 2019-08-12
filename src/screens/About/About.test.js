import React from 'react'
import { shallow } from 'enzyme'
import AboutComponent from './AboutComponent'

describe('About Component', () => {
  it('Should render without errors', () => {
    shallow(<AboutComponent />)
  })
})
