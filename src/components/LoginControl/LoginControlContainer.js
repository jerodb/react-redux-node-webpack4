import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Activity from '../Activity'
import LoggedIn from './LoggedInComponent'
import LoggedOut from './LoggedOutComponent'
import { clearUser } from '../../actions/userActions'

function LoginControlContainer({
  AuthManager, expiresAt, isLoggedIn, onClearUser, picture, userName
}) {
  useEffect(() => {
    if (AuthManager) {
      const { isAuthenticated } = AuthManager

      if (expiresAt && !isAuthenticated(expiresAt)) {
        logout()
      }
    }
  }, [])

  const login = () => AuthManager.login()

  const logout = () => {
    onClearUser()
    AuthManager.logout()
  }

  if (picture && userName) {
    return (
      <LoggedIn
        logout={logout}
        picture={picture}
        userName={userName}
      />
    )
  }

  if (isLoggedIn) return <Activity styles={{}} />

  return <LoggedOut login={login} />
}

const mapStateToProps = state => {
  const { AuthManager } = state.auth
  const {
    expiresAt, isLoggedIn, picture, userName
  } = state.user

  return {
    AuthManager,
    expiresAt,
    isLoggedIn,
    picture,
    userName
  }
}

const mapDispatchToProps = dispatch => ({
  onClearUser: () => dispatch(clearUser())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginControlContainer)
