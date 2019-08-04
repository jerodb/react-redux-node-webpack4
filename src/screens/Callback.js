import React from 'react'
import { Callback } from 'auth0-react-login-control'
import NoSsr from '@material-ui/core/NoSsr'

const { AUTH_CONFIG } = process.env

export default () => <NoSsr><Callback config={AUTH_CONFIG} /></NoSsr>
