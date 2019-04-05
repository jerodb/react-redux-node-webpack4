import Sequelize from 'sequelize'
import { sequelize } from '../services/mysql'
import { MYSQL_PHOTOS_TABLE as table } from '../../config'

const userGamesModel = sequelize.define(
  table,
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    initial_text: Sequelize.STRING,
    answer: Sequelize.STRING,
    x_label: Sequelize.STRING,
    y_label: Sequelize.STRING,
    draw_tip: Sequelize.STRING,
    mobile_tip: Sequelize.STRING,
    button_text: Sequelize.STRING,
  },
  {
    timestamps: false,
    underscored: true,
  },
)

module.exports = userGamesModel
