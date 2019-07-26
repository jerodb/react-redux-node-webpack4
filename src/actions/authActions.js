import {
  AUTH_CLEAR, AUTH_FAILED, AUTH_FETCHING, AUTH_INIT
} from './_types'

export const authFailed = err => ({ type: AUTH_FAILED, errors: err })

export const authIsFetching = () => ({ type: AUTH_FETCHING })

export const clearAuth = () => ({
  type: AUTH_CLEAR
})

export const initAuth = Auth => ({
  type: AUTH_INIT,
  Auth
})
