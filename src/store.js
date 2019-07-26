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
const persistor = {} // persistStore(store, applyMiddleware(...middleware), () => {})
const configureStore = () => ({ persistor, store })

export default configureStore
