import { SERVER_INFO_IS_FETCHING, SERVER_INFO_SET } from '../actions/_types'

const initialState = {
  isFetching: false,
  errorMessage: '',
  serverInfo: null,
}

export const serverInfo = (state = initialState, action) => {
  switch (action.type) {
    case SERVER_INFO_IS_FETCHING:
      return {
        ...initialState,
        isFetching: true
      }
    case SERVER_INFO_SET:
      return {
        ...initialState,
        serverInfo: action.serverInfo

      }
    default:
      return state
  }
}
