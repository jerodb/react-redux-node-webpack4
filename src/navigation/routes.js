import About from '../screens/About'
import Home from '../screens/Home'

const routes = [
  {
    path: '/',
    Comp: Home,
    key: 'home',
    exact: true,
  },
  {
    path: '/about',
    Comp: About,
    key: 'about',
    exact: true,
  },
]

export default routes
