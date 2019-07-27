import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { setUserSession } from '../actions/userActions'

function AuthControl({ AuthManager, isLoggedIn, onSetUserSession }) {
  useEffect(() => {
    if (isLoggedIn) {
      const renewSession = async () => AuthManager.renewSession()

      renewSession().then(session => { if (session) onSetUserSession(session) })
    }
  })

  return <></>
}

const mapStateToProps = state => {
  const { AuthManager } = state.auth
  const { isLoggedIn } = state.user

  return {
    AuthManager,
    isLoggedIn,
  }
}

const mapDispatchToProps = dispatch => ({
  onSetUserSession: session => dispatch(setUserSession(session))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthControl)
