import Sequelize from 'sequelize'
import { sequelize } from '../services/mysql'
import { MYSQL_USERS as table } from '../../config'

const userModel = sequelize.define(
  table,
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: Sequelize.STRING,
  },
  {
    underscored: true,
  },
)

module.exports = userModel
