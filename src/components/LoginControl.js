import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import { clearUser } from '../actions/userActions'

class LoginControl extends Component {
  constructor(props) {
    super(props)

    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }

  login() {
    const { Auth } = this.props
    Auth.login()
  }

  logout() {
    const { Auth, onClearUser } = this.props
    Auth.logout()
    onClearUser()
  }

  render() {
    const {
      Auth, expiresAt, onClearUser, picture, userName
    } = this.props

    if (Auth && expiresAt) {
      const { isAuthenticated } = Auth

      if (isAuthenticated(expiresAt)) {
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
              onClick={this.logout}
            >
            Log Out
            </Button>
          </>
        )
      }

      Auth.logout()
      onClearUser()
    }

    return (
      <>
        <Button
          variant="contained"
          color="secondary"
          onClick={this.login}
        >
          Log In
        </Button>
      </>
    )
  }
}

const mapStateToProps = state => {
  const { Auth } = state.auth
  const { expiresAt, picture, userName } = state.user

  return {
    Auth,
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
