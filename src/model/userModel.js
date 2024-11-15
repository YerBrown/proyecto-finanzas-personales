import Mysql from "../config/mysql.js";
const mysqlInstance = new Mysql();

const User = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.String(40),
    allowNull: false,
  },
  email: {
    type: DataTypes.String(255),
    allowNull: false,
  },
  password: {
    type: DataTypes.String(50),
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
