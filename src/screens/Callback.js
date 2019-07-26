import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import NoSsr from '@material-ui/core/NoSsr'
import AuthManager from '../lib/Auth0Manager'
import { setUserSession } from '../actions/userActions'
import { loading } from '../res/images'

const styles = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  marginTop: '20%'
}

function Callback({ location, onSetUserSession, userId }) {
  useEffect(() => {
    const authManager = new AuthManager()

    const handleAuthentication = async () => {
      if (/access_token|id_token|error/.test(location.hash)) {
        return authManager.handleAuthentication()
      }
      return null
    }

    handleAuthentication().then(session => {
      if (session) onSetUserSession(session)
    })
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
  const { userId } = state.user

  return { userId }
}

const mapDispatchToProps = dispatch => ({
  onSetUserSession: session => dispatch(setUserSession(session))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Callback)
