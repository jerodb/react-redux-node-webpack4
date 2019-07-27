import { verifyMysqlConnection } from '../mysql'
import { DATABASE } from '../../config'

const verifyDatabaseConnection = () => {
  switch (DATABASE) {
    case 'mysql':
      return verifyMysqlConnection()
    default:
      return null
  }
}

export default verifyDatabaseConnection
