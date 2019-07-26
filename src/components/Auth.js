import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import AuthManager from '../lib/Auth0Manager'
import { setUserSession } from '../actions/userActions'

function AuthControl({ isLoggedIn, onSetUserSession }) {
  useEffect(() => {
    const authManager = new AuthManager()

    if (isLoggedIn) {
      const renewSession = async () => authManager.renewSession()

      renewSession().then(session => { if (session) onSetUserSession(session) })
    }
  })

  return <></>
}

const mapStateToProps = state => {
  const { isLoggedIn } = state.user

  return {
    isLoggedIn
  }
}

const mapDispatchToProps = dispatch => ({
  onSetUserSession: session => dispatch(setUserSession(session))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthControl)
