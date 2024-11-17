import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";
import ExpenseType from "./expenseTypeModel.js";

const Expense = sequelize.define("expense", {
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
  title: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  comment: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  datetime: {
    type: DataTypes.DATE,
    allowNull: false,
    // Formatea la fecha para el input de tipo datetime-local
    get() {
      const rawValue = this.getDataValue("datetime");
      if (!rawValue) return null;

      // Formatear la fecha para "YYYY-MM-DDTHH:MM"
      return new Date(rawValue).toISOString().slice(0, 16);
    },
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

// Establece la relación con el modelo ExpenseType
Expense.belongsTo(ExpenseType, { foreignKey: "type_id" });

export default Expense;