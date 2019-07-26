import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import AuthManager from '../lib/Auth0Manager'
import { clearUser } from '../actions/userActions'

function LoginControl({
  expiresAt, onClearUser, picture, userName
}) {
  const [authManager, setAuthManager] = useState(null)

  if (!authManager) setAuthManager(new AuthManager())

  useEffect(() => {
    if (authManager) {
      const { isAuthenticated } = authManager

      if (expiresAt && !isAuthenticated(expiresAt)) {
        logout()
      }
    }
  }, [])

  const login = () => authManager.login()

  const logout = () => {
    authManager.logout()
    onClearUser()
  }

  if (picture && userName) {
    return (
      <>
        <div style={{
          display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 12
        }}
        >
          <span>{`${userName}`}</span>
          <img style={{ width: 40, borderRadius: 50, marginLeft: 8 }} src={picture} alt="" />
        </div>
        <Button
          variant="contained"
          color="default"
          onClick={logout}
        >
        Log Out
        </Button>
      </>
    )
  }

  return (
    <>
      <Button
        variant="contained"
        color="secondary"
        onClick={login}
      >
        Log In
      </Button>
    </>
  )
}

const mapStateToProps = state => {
  const { expiresAt, picture, userName } = state.user

  return {
    expiresAt,
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
)(LoginControl)
