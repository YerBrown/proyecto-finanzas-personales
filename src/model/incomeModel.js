import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";
import incomeTypeModel from "./incomeTypeModel.js";

// Definición del modelo Income
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
    title: {
        type: DataTypes.STRING(45),
        allowNull: true,
    },
    comment: {
        type: DataTypes.STRING(200),
        allowNull: false,
    },
    datetime: {
        type: DataTypes.DATE,
        allowNull: false,
        // Formatea la fecha para el input de tipo datetime-local
        get() {
            const rawValue = this.getDataValue("datetime");
            if (!rawValue) return null;

            // Formatea la fecha en "YYYY-MM-DDTHH:MM"
            const fecha = new Date(rawValue);
            return fecha.toISOString().slice(0, 16);
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

// Establece la relación con el modelo IncomeType
Income.belongsTo(incomeTypeModel, { foreignKey: "type_id" });

export default Income;
