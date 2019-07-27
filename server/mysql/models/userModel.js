import Sequelize from 'sequelize'

const userModel = sequelize => sequelize.define(
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

export default userModel
