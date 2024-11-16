import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";
import incomeTypeModel from "./incomeTypeModel.js";

const Income = sequelize.define("income", {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  datetime: {
    type: DataTypes.DATE,
    allowNull: false,
    // Formatear la fecha para el input de datetime
    get() {
      const rawValue = this.getDataValue("datetime");
      if (!rawValue) return null;

      const fecha = new Date(rawValue);
      const year = fecha.getFullYear();
      const month = String(fecha.getMonth() + 1).padStart(2, "0"); // Mes (0-11) + 1
      const day = String(fecha.getDate()).padStart(2, "0");
      const hours = String(fecha.getHours()).padStart(2, "0");
      const minutes = String(fecha.getMinutes()).padStart(2, "0");

      // Devolver la fecha en el formato "YYYY-MM-DDTHH:MM"
      return `${year}-${month}-${day}T${hours}:${minutes}`;
    },
  },
  title: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  comment: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  type_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Income.belongsTo(incomeTypeModel, { foreignKey: "type_id" });

export default Income;
