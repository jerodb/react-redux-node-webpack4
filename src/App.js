import React from 'react'
import { Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import Router from './components/Router'
import Auth from './lib/Auth'

const { AUTH_CLIENT_ID } = process.env

let auth = null

const App = () => (
  <Route render={({ history, location }) => {
    if (AUTH_CLIENT_ID) auth = auth === null ? new Auth({ history }) : auth

    return (
      <>
        <CssBaseline />
        <Router location={location} auth={auth} />
      </>
    )
  }}
  />
)

export default App
