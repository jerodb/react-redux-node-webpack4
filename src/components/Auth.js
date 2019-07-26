import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import AuthManager from '../lib/Auth0Manager'
import { initAuth } from '../actions/authActions'
import { setUserSession } from '../actions/userActions'

function AuthControl({
  Auth, onInitAuth, onSetUserSession
}) {
  useEffect(() => {
    if (!Auth) {
      const authManager = new AuthManager()

      onInitAuth(authManager)
    } else if (localStorage.getItem('isLoggedIn') === 'true') {
      const renewSession = async () => Auth.renewSession()

      renewSession().then(session => { if (session) onSetUserSession(session) })
    }
  })

  return <></>
}

const mapStateToProps = state => {
  const { Auth } = state.auth

  return { Auth }
}

const mapDispatchToProps = dispatch => ({
  onInitAuth: Auth => dispatch(initAuth(Auth)),
  onSetUserSession: session => dispatch(setUserSession(session))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthControl)
