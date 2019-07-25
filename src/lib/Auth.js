import auth0 from 'auth0-js'
import { users } from '../services'

const {
  AUTH_CLIENT_ID, AUTH_DOMAIN, AUTH_RESPONSE_TYPE, AUTH_REDIRECT_URI, AUTH_SCOPE
} = process.env

export default class Auth {
  accessToken;

  idToken;

  expiresAt;

  history;

  userName;

  picture;

  auth0 = new auth0.WebAuth({
    domain: AUTH_DOMAIN,
    clientID: AUTH_CLIENT_ID,
    redirectUri: AUTH_REDIRECT_URI,
    responseType: AUTH_RESPONSE_TYPE,
    scope: AUTH_SCOPE
  })

  constructor(args) {
    this.history = args.history

    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
    this.handleAuthentication = this.handleAuthentication.bind(this)
    this.isAuthenticated = this.isAuthenticated.bind(this)
    this.getAccessToken = this.getAccessToken.bind(this)
    this.getIdToken = this.getIdToken.bind(this)
    this.renewSession = this.renewSession.bind(this)
  }

  login() {
    this.auth0.authorize()
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      console.log('authResult: ', authResult)
      console.log('err: ', err)

      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult)
      } else if (err) {
        // eslint-disable-next-line no-console
        console.log('err: ', err)
        // eslint-disable-next-line no-alert
        alert(`Error: ${err.error}. Check the console for further details.`)
        // this.history.replace('/')
      }
    })
  }

  getAccessToken() {
    return this.accessToken
  }

  getIdToken() {
    return this.idToken
  }

  getUserName() {
    return this.userName
  }

  getPicture() {
    return this.picture
  }

  setSession(authResult) {
    const {
      idTokenPayload, expiresIn, accessToken, idToken
    } = authResult

    // Set isLoggedIn flag in localStorage
    localStorage.setItem('isLoggedIn', 'true')

    // Set the time that the Access Token will expire at
    const expiresAt = (expiresIn * 1000) + new Date().getTime()

    this.accessToken = accessToken
    this.idToken = idToken
    this.expiresAt = expiresAt
    // eslint-disable-next-line prefer-destructuring
    this.userId = idTokenPayload.sub.split('|')[1]
    this.userName = idTokenPayload.nickname
    this.picture = idTokenPayload.picture

    users.setUser(this.userId)

    // navigate to the home route
    this.history.push('/')

    /*
    this.auth0.client.userInfo(this.accessToken, (err, user) => {
      if (err) {
        console.log('ERROR - auth0.client.userInfo: ', err)
      } else {
        this.userName = user.nickname
        this.picture = user.picture
      }

      console.log('user info: ', user)
    })
    */
  }

  renewSession() {
    this.auth0.checkSession({}, (err, authResult) => {
      console.log('erroror: ', err)
      console.log('authResult: ', authResult)

      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult)
      } else if (err) {
        // eslint-disable-next-line no-console
        console.log(err)
        // eslint-disable-next-line no-alert
        alert(`Could not get a new token (${err.error}: ${err.error_description}).`)
        this.logout()
      }
    })
  }

  logout() {
    // Remove tokens and expiry time
    this.accessToken = null
    this.idToken = null
    this.expiresAt = 0

    // Remove isLoggedIn flag from localStorage
    localStorage.removeItem('isLoggedIn')

    this.auth0.logout({
      returnTo: window.location.origin
    })

    // navigate to the home route
    this.history.push('/')
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    const { expiresAt } = this
    return new Date().getTime() < expiresAt
  }
}
