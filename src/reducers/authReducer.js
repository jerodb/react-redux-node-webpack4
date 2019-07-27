import AuthManager from '../lib/Auth0Manager'

const initialState = {
  AuthManager: new AuthManager()
}

export const auth = (state = initialState, action) => state
