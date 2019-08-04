import About from '../screens/About'
import Home from '../screens/Home'

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
]

export default routes
