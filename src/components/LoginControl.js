import React from 'react'
import { connect } from 'react-redux'
import { LoginControl } from 'auth0-react-login-control'
import { clearUser, setUserSession } from '../actions/userActions'

const { AUTH_CONFIG } = process.env

function LoginControlComponent({ onClearUser, onSetUserSession }) {
  const menuList = [
    {
      name: 'Profile',
      onClick: () => null
    }
  ]

  if (AUTH_CONFIG) {
    return (
      <LoginControl
        config={AUTH_CONFIG}
        menuList={menuList}
        onLogOut={onClearUser}
        onSetSession={onSetUserSession}
      />
    )
  }

  return <></>
}

const mapDispatchToProps = dispatch => ({
  onClearUser: () => dispatch(clearUser()),
  onSetUserSession: session => dispatch(setUserSession(session)),
})

export default connect(
  null,
  mapDispatchToProps
)(LoginControlComponent)
