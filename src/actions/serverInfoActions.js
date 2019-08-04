import { SERVER_INFO_IS_FETCHING, SERVER_INFO_SET } from './_types'

export const getServerInfo = () => ({ type: SERVER_INFO_IS_FETCHING })

export const setServerInfo = serverInfo => ({ type: SERVER_INFO_SET, serverInfo })
