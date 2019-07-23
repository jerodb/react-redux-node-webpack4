import Home from './screens/Home'
import Callback from './screens/Callback'

const routes = [
  {
    key: 'home',
    path: '/',
    Comp: Home,
    exact: true,
  },
  {
    key: 'callback',
    path: '/auth/callback',
    Comp: Callback,
    exact: true,
  }
]

export default routes
