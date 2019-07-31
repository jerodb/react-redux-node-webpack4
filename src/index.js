import '@babel/polyfill'
import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { hydrate } from 'react-dom'
import { ThemeProvider } from '@material-ui/styles'
import Router from './navigation/Router'
import Auth from './components/Auth'
import theme from './res/theme'
import configureStore from './store'

const { AUTH_CLIENT_ID, BASE_URL, NODE_ENV } = process.env

const App = () => {
  useEffect(() => {
    const jssStyles = document.getElementById('jss-server-side')

    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }, [])

  const { store } = configureStore()

  // Grab the state from a global variable injected into the server-generated HTML
  // const preloadedState = window.__PRELOADED_STATE__

  // Allow the passed state to be garbage-collected
  // delete window.__PRELOADED_STATE__

  // Create Redux store with initial state
  // const store = createStore(counterApp, preloadedState)

  return (
    <Provider store={store}>
      <BrowserRouter basename={BASE_URL}>
        <ThemeProvider theme={theme}>
          { AUTH_CLIENT_ID && <Auth /> }
          <Router />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  )
}

hydrate(<App />, document.getElementById('app'))

// https://webpack.js.org/api/hot-module-replacement/
if (NODE_ENV === 'development') module.hot.accept()
