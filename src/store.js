import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'

const loggerMiddleware = createLogger()

const middleware = []
const DEV = true

middleware.push(thunkMiddleware)

if (DEV) {
  middleware.push(loggerMiddleware)
}

const store = createStore(rootReducer, applyMiddleware(...middleware))
const configureStore = () => ({ store })

export default configureStore
