import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const User = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING(40),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  create_time: {
    type: DataTypes.DATE,
    allowNull: true,

  },
  rol: {
    type: DataTypes.ENUM("client", "admin"),
    allowNull: false,
    defaultValue: "client",
  },
  active: {
    type: DataTypes.TINYINT(1),
    allowNull: false,
    defaultValue: 1
  }

})

export default User;
