import { USER_CLEAR, USER_SET } from '../actions/_types'

const initialState = {
  accessToken: '',
  email: '',
  emailVerified: false,
  expiresAt: 0,
  isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',
  idToken: '',
  picture: '',
  userId: '',
  userName: ''
}

export const user = (state = initialState, action) => {
  switch (action.type) {
    case USER_CLEAR:
      return {
        ...initialState,
        isLoggedIn: false
      }
    case USER_SET:
      return {
        ...state,
        accessToken: action.accessToken,
        email: action.email,
        emailVerified: action.emailVerified,
        expiresAt: action.expiresAt,
        idToken: action.idToken,
        isLoggedIn: true,
        picture: action.picture,
        userId: action.userId,
        userName: action.userName
      }
    default:
      return state
  }
}
