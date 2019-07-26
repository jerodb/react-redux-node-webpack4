import { USER_CLEAR, USER_SET } from './_types'

export const clearUser = () => ({ type: USER_CLEAR })

export const setUserSession = session => ({ type: USER_SET, ...session })
