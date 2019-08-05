import {
  SERVER_INFO_CLEAR, SERVER_INFO_ERROR, SERVER_INFO_IS_FETCHING, SERVER_INFO_SET
} from './_types'

export const clearServerInfo = () => ({ type: SERVER_INFO_CLEAR })

export const getServerInfo = () => ({ type: SERVER_INFO_IS_FETCHING })

export const setServerInfo = serverInfo => ({ type: SERVER_INFO_SET, data: serverInfo })

export const showError = error => ({ type: SERVER_INFO_ERROR, error })
