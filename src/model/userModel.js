import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

// Define el modelo "User" con sus columnas y propiedades.
const User = sequelize.define("user", {

    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
    },

    username: {
        type: DataTypes.STRING(40),
        allowNull: false,
        unique: true,
    },

    email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
    },

    password: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },

    create_time: {
        type: DataTypes.DATE,
        allowNull: true,
        get() {

            const rawValue = this.getDataValue("create_time");
            if (!rawValue) return null;

            const fecha = new Date(rawValue);
            return fecha.toISOString().slice(0, 16);
        },
    },

    rol: {
        type: DataTypes.ENUM("client", "admin"),
        allowNull: true,
    },

    active: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 1,
    },
});

// Exporta el modelo para usarlo en otras partes del proyecto.
export default User;
