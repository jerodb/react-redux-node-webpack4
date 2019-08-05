import 'core-js/stable'
import 'regenerator-runtime/runtime'
import 'whatwg-fetch'

import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { hydrate } from 'react-dom'
import { ThemeProvider } from '@material-ui/styles'
import Router from './navigation/Router'
import theme from './res/theme'
import initStore from './store'

const { BASE_NAME } = process.env

const App = () => {
  useEffect(() => {
    const jssStyles = document.getElementById('ssr-styles')
    const initialState = document.getElementById('ssr-state')

    if (jssStyles) jssStyles.parentNode.removeChild(jssStyles)
    if (initialState) initialState.parentNode.removeChild(initialState)
  }, [])

  // Grab the initial state from SSR generated global variable
  const preloadedState = window.INITIAL_STATE

  // Create Redux store with initial state
  const store = initStore(preloadedState)

  return (
    <Provider store={store}>
      <BrowserRouter basename={BASE_NAME}>
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  )
}

hydrate(<App />, document.getElementById('app'))

// https://webpack.js.org/api/hot-module-replacement/
if (module.hot) module.hot.accept()
