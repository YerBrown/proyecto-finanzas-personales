import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const ExpenseType = sequelize.define("expense_type", {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true,
    unique: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(45),
    allowNull: false,
    unique: true,
  },
});

export default ExpenseType;
