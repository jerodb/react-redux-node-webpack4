import React from 'react'
import { Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import ScrollToTop from './components/ScrollToTop'
import Router from './navigation/Router'

function App() {
  return (
    <>
      <CssBaseline />
      <Route component={ScrollToTop} />
      <Router />
    </>
  )
}

export default App
