import CreateGame from '../screens/CreateGame'
import Home from '../screens/Home'

const routes = [
  {
    path: '/',
    Comp: Home,
    key: 'home',
    exact: true,
  },
  {
    path: '/create-game',
    Comp: CreateGame,
    key: 'createGame',
    exact: true,
  },
]

export default routes
