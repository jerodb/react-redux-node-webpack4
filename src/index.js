import '@babel/polyfill'
import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { hydrate } from 'react-dom'
import { ThemeProvider } from '@material-ui/styles'
import App from './App'
import theme from './res/theme'
import configureStore from './store'

const { BASE_URL, NODE_ENV } = process.env

const Main = () => {
  useEffect(() => {
    const jssStyles = document.getElementById('jss-server-side')

    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }, [])

  const { store } = configureStore()

  return (
    <BrowserRouter basename={BASE_URL}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

hydrate(<Main />, document.getElementById('app'))

if (NODE_ENV === 'development') module.hot.accept()
