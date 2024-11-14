import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";
import expenseTypeModel from "./expenseTypeModel.js";

const ExpenseModel = sequelize.define("expense", {
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

ExpenseModel.belongsTo(expenseTypeModel, { foreignKey: "type_id" });

export default ExpenseModel;
