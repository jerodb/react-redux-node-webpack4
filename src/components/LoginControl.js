import React, { Component } from 'react'
import Button from '@material-ui/core/Button'

export default class LoginControl extends Component {
  constructor(props) {
    super(props)

    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }

  componentDidMount() {
    const { auth } = this.props

    if (localStorage.getItem('isLoggedIn') === 'true') {
      auth.renewSession()
    }
  }

  login() {
    const { auth } = this.props
    auth.login()
  }

  logout() {
    const { auth } = this.props
    auth.logout()
  }

  render() {
    const { auth } = this.props
    const { isAuthenticated, userName, picture } = auth

    return (
      <>
        {
          !isAuthenticated() && (
          <Button
            variant="contained"
            color="secondary"
            onClick={this.login}
          >
            Log In
          </Button>
          )
        }
        {
          isAuthenticated() && (
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
      </>
    )
  }
}
