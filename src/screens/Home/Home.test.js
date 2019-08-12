import React from 'react'
import { mount } from 'enzyme'
import { ThemeProvider } from '@material-ui/styles'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
import Home from './HomeContainer'
import theme from '../../res/theme'

const middlewares = [thunkMiddleware]
const mockStore = configureStore(middlewares)
const initialState = {
  serverInfo: {
    data: null,
    error: '',
    isFetching: false,
  }
}
const store = mockStore(initialState)

describe('Home Component', () => {
  it('Should render without errors', () => {
    mount(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Home />
        </ThemeProvider>
      </Provider>
    )
  })
})
