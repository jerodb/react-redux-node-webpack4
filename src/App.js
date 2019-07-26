import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Router from './components/Router'
import Auth from './components/Auth'

const { AUTH_CLIENT_ID } = process.env

const isClient = typeof window !== 'undefined' && window.document

const App = () => (
  <>
    <CssBaseline />
    { AUTH_CLIENT_ID && isClient && <Auth /> }
    <Router />
  </>
)

export default App
