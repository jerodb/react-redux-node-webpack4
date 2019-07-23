import React from 'react'
import { Route } from 'react-router-dom'
import Router from './components/Router'
import Auth from './lib/Auth'

import './res/styles.css'

let auth = null

const App = () => (
  <Route render={({ history, location }) => {
    auth = auth === null ? new Auth({ history }) : auth

    return <Router location={location} auth={auth} />
  }}
  />
)

export default App
