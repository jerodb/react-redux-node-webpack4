import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'

const { NODE_ENV } = process.env

const loggerMiddleware = createLogger()

const middleware = []

middleware.push(thunkMiddleware)

if (NODE_ENV === 'development') {
  middleware.push(loggerMiddleware)
}

const initStore = (initialState = undefined) => (
  createStore(rootReducer, initialState, applyMiddleware(...middleware))
)

export default initStore
