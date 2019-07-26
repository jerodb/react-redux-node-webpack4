import auth0 from 'auth0-js'

const {
  AUTH_CLIENT_ID, AUTH_DOMAIN, AUTH_RESPONSE_TYPE, AUTH_REDIRECT_URI, AUTH_SCOPE
} = process.env

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: AUTH_DOMAIN,
    clientID: AUTH_CLIENT_ID,
    redirectUri: AUTH_REDIRECT_URI,
    responseType: AUTH_RESPONSE_TYPE,
    scope: AUTH_SCOPE
  })

  constructor() {
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
    this.handleAuthentication = this.handleAuthentication.bind(this)
    this.isAuthenticated = this.isAuthenticated.bind(this)
    this.renewSession = this.renewSession.bind(this)
  }

  handleAuthentication() {
    return new Promise(resolve => {
      this.auth0.parseHash(async (err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          const session = await this.setSession(authResult)

          return resolve(session)
        }

        if (err) {
          // eslint-disable-next-line no-console
          console.log('auth0.parseHash Error: ', err)
          // eslint-disable-next-line no-alert
          alert(`Error: ${err.error}.`)
        }

        return resolve(null)
      })
    })
  }

  isAuthenticated = expiresAt => (new Date().getTime() < expiresAt)

  login() {
    this.auth0.authorize()
  }

  logout() {
    // Remove isLoggedIn flag from localStorage
    localStorage.removeItem('isLoggedIn')

    // Auth0 needs to redirect after logout.
    this.auth0.logout({
      returnTo: window.location.origin
    })
  }

  renewSession() {
    return new Promise(resolve => {
      this.auth0.checkSession({}, async (err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          const session = await this.setSession(authResult)

          return resolve(session)
        }

        if (err) {
          // eslint-disable-next-line no-console
          console.log('auth0.checkSession Error: ', err)
          // eslint-disable-next-line no-alert
          alert(`Could not get a new token (${err.error}: ${err.error_description}).`)
        }

        this.logout()
        return resolve(null)
      })
    })
  }

  setSession = authResult => new Promise(resolve => {
    const {
      idTokenPayload, expiresIn, accessToken, idToken
    } = authResult

    // Set isLoggedIn flag in localStorage
    localStorage.setItem('isLoggedIn', 'true')

    // Set the time that the Access Token will expire at
    const expiresAt = (expiresIn * 1000) + new Date().getTime()

    const {
      // eslint-disable-next-line camelcase
      email, email_verified, nickname, picture, sub
    } = idTokenPayload
    const [, userId] = sub.split('|')

    resolve({
      accessToken,
      email,
      emailVerified: email_verified,
      expiresAt,
      idToken,
      picture,
      userId,
      userName: nickname
    })
  })
}
