/* eslint-disable no-console */
import Sequelize from 'sequelize'
import {
  MYSQL_DB, MYSQL_USER, MYSQL_PASS, MYSQL_HOST, MYSQL_PORT,
} from '../../config'

const sqlize = new Sequelize(
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

const verify = () => sqlize
  .authenticate()
  .then(() => {
    console.log(`Connection to MYSQL database ${MYSQL_DB} established successfully.`)
  })
  .catch(err => {
    console.error(`Unable to connect to MYSQL database ${MYSQL_DB}: `, err)
  })

export const verifyConnection = verify
export const sequelize = sqlize
