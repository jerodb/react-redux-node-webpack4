import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('App Component', () => {
  beforeEach(() => {
    window.scrollTo = () => {} // provide an empty implementation for window.scrollTo
  })

  it('Should render without errors', () => {
    shallow(<App />)
  })

  it('Should include CssBaseline', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('CssBaseline')).toHaveLength(1)
  })
})
