import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const IncomeTypeModel = sequelize.define('income_type',{
    id:{
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull:false,
        primaryKey:true,
        unique:true,
        autoIncrement:true
    },
    name:{
        type: DataTypes.STRING(45),
        allowNull:true,
        unique:true
  }
})

export default IncomeTypeModel;