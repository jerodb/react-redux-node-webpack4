import Sequelize from 'sequelize'
import { sequelize } from '../services/mysql'

const userModel = sequelize.define(
  'users',
  {
    id: {
      type: Sequelize.STRING.BINARY,
      allowNull: false,
      primaryKey: true,
    },
    idStr: {
      field: 'id_str',
      type: Sequelize.STRING(36),
      allowNull: false
    },
    authId: {
      field: 'auth_id',
      type: Sequelize.STRING(100),
      allowNull: false
    },
    createdAt: {
      field: 'created_at',
      type: Sequelize.DATE,
    },
    updatedAt: {
      field: 'updated_at',
      type: Sequelize.DATE,
    }
  },
  {
    timestamp: false,
    underscored: true,
  },
)

module.exports = userModel
