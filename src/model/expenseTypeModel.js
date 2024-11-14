import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const ExpenseType = sequelize.define('expense_type',{
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  })

  export default ExpenseType;