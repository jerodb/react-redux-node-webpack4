import About from '../screens/About'
import Callback from '../screens/Callback'
import Home from '../screens/Home'
import Profile from '../screens/Profile'

const routes = [
  {
    path: '/',
    Comp: Home,
    key: 'home',
    exact: true,
    layout: true,
  },
  {
    path: '/about',
    Comp: About,
    key: 'about',
    exact: true,
    layout: true,
  },
  {
    path: '/user/profile',
    Comp: Profile,
    key: 'profile',
    exact: true,
    layout: true,
  },
  {
    path: '/auth/callback',
    Comp: Callback,
    key: 'callback',
    exact: true,
  },
]

export default routes
