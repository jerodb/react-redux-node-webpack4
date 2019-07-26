import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import AuthManager from '../lib/Auth0Manager'
import { setUserSession } from '../actions/userActions'

function AuthControl({ onSetUserSession }) {
  useEffect(() => {
    const authManager = new AuthManager()

    if (localStorage.getItem('isLoggedIn') === 'true') {
      const renewSession = async () => authManager.renewSession()

      renewSession().then(session => { if (session) onSetUserSession(session) })
    }
  })

  return <></>
}

const mapDispatchToProps = dispatch => ({
  onSetUserSession: session => dispatch(setUserSession(session))
})

export default connect(
  null,
  mapDispatchToProps
)(AuthControl)
