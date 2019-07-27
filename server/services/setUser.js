import { setUserMysql } from '../mysql'
import { DATABASE } from '../../config'

const setUser = args => {
  switch (DATABASE) {
    case 'mysql':
      return setUserMysql(args)
    default:
      return null
  }
}

export default setUser
