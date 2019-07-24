import React from 'react'
import { Route } from 'react-router-dom'
import Router from './Router'
import Auth from '../lib/Auth'
import { AUTH_CLIENT_ID } from '../../config'
import '../res/styles.css'

let auth = null

const App = () => (
  <Route render={({ history, location }) => {
    if (AUTH_CLIENT_ID) auth = auth === null ? new Auth({ history }) : auth

    return <Router location={location} auth={auth} />
  }}
  />
)

export default App
