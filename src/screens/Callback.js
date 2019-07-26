import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import NoSsr from '@material-ui/core/NoSsr'
import AuthManager from '../lib/Auth0Manager'
import { setUserSession } from '../actions/userActions'
import { initAuth } from '../actions/authActions'
import { loading } from '../res/images'

const styles = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  marginTop: '20%'
}

function Callback({
  Auth, location, onInitAuth, onSetUserSession, userId
}) {
  useEffect(() => {
    if (!Auth) {
      const authManager = new AuthManager()

      onInitAuth(authManager)
    } else {
      const handleAuthentication = async () => {
        if (/access_token|id_token|error/.test(location.hash)) {
          return Auth.handleAuthentication()
        }
        return null
      }

      handleAuthentication().then(session => {
        if (session) onSetUserSession(session)
      })
    }
  })

  if (userId) return <Redirect to="/" />

  return (
    <NoSsr>
      <div style={styles}>
        <img src={loading} alt="loading" />
      </div>
    </NoSsr>
  )
}


const mapStateToProps = state => {
  const { Auth } = state.auth
  const { userId } = state.user

  return { Auth, userId }
}

const mapDispatchToProps = dispatch => ({
  onInitAuth: Auth => dispatch(initAuth(Auth)),
  onSetUserSession: session => dispatch(setUserSession(session))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Callback)
