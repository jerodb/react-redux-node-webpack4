import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import LoginControlComponent from './LoginControlComponent'
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

  return (
    <LoginControlComponent
      isLoggedIn={isLoggedIn}
      login={login}
      logout={logout}
      picture={picture}
      userName={userName}
    />
  )
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
