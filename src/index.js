import '@babel/polyfill'
import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { hydrate } from 'react-dom'
import { ThemeProvider } from '@material-ui/styles'
import App from './App'
import theme from './res/theme'

const { BASE_URL, NODE_ENV } = process.env

const Main = () => {
  useEffect(() => {
    const jssStyles = document.getElementById('jss-server-side')

    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }, [])

  return (
    <BrowserRouter basename={BASE_URL}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  )
}

hydrate(<Main />, document.getElementById('app'))

if (NODE_ENV === 'development') module.hot.accept()
