import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";
import incomeTypeModel from "./incomeTypeModel.js";

const Income = sequelize.define('income',{
    id:{
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
        unique:true
    },
    amount:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    datetime:{
      type: DataTypes.DATE,
      allowNull:false
  },
    title:{
        type: DataTypes.STRING(45),
        allowNull:true
    },
    comment:{
        type:DataTypes.STRING(200),
        allowNull:false
    },
    type_id:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    user_id:{
      type:DataTypes.INTEGER,
      allowNull:false
  }
})


Income.belongsTo(incomeTypeModel, { foreignKey: "type_id" });

export default Income;
