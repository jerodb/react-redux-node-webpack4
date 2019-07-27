/* eslint-disable no-console */
import Sequelize from 'sequelize'
import { Users } from './models'
import {
  MYSQL_DB, MYSQL_USER, MYSQL_PASS, MYSQL_HOST, MYSQL_PORT,
} from '../../config'

export const sequelize = new Sequelize(
  `mysql://${MYSQL_USER}:${MYSQL_PASS}@${MYSQL_HOST}:${MYSQL_PORT}/${MYSQL_DB}`,
  {
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    logging: false,
  },
)

export const verifyMysqlConnection = () => sequelize
  .authenticate()
  .then(() => {
    console.log(`Connection to MYSQL database ${MYSQL_DB} established successfully.`)
  })
  .catch(err => {
    console.log(`Unable to connect to MYSQL database ${MYSQL_DB}: `, err)
  })

export const setUserMysql = ({
  authId, id, idStr, datetime
}) => new Promise(resolve => {
  const raw = true
  const where = { authId }

  // Set the default properties if it doesn't exist
  const defaults = {
    id,
    idStr,
    authId,
    createdAt: datetime,
    updatedAt: datetime
  }

  try {
    Users(sequelize).findOrCreate({
      raw,
      where,
      defaults
    }).then(() => {
      resolve(true)
    })
  } catch (err) {
    resolve({ error: err })
  }
})
