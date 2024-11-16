import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";
import ExpenseType from "./expenseTypeModel.js";

const Expense = sequelize.define("expense", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  comment: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  datetime: {
    type: DataTypes.DATE,
    allowNull: false,
    get() {
      const rawValue = this.getDataValue('datetime');
      if (!rawValue) return null;

      // Convertir la fecha a un objeto Date
      const fecha = new Date(rawValue);

      // Formatear la fecha y hora para "datetime-local"
      const year = fecha.getFullYear();
      const month = String(fecha.getMonth() + 1).padStart(2, '0'); // Mes (0-11) + 1
      const day = String(fecha.getDate()).padStart(2, '0');
      const hours = String(fecha.getHours()).padStart(2, '0');
      const minutes = String(fecha.getMinutes()).padStart(2, '0');

      // Devolver la fecha en el formato "YYYY-MM-DDTHH:MM"
      return `${year}-${month}-${day}T${hours}:${minutes}`;
    }
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

Expense.belongsTo(ExpenseType, { foreignKey: "type_id" });

export default Expense;
