import {
  AUTH_CLEAR, AUTH_FAILED, AUTH_FETCHING, AUTH_INIT
} from '../actions/_types'

const initialState = {
  Auth: null,
  authFailed: false,
  errors: [],
  isFetching: false,
}

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_CLEAR:
      return {
        ...initialState
      }
    case AUTH_FAILED:
      return {
        isFetching: false,
        authFailed: true,
        errors: action.errors
      }
    case AUTH_FETCHING:
      return {
        isFetching: true,
        authFailed: false
      }
    case AUTH_INIT:
      return {
        ...state,
        Auth: action.Auth
      }
    default:
      return state
  }
}
