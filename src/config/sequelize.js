import { Sequelize } from "sequelize";
import dotenv from "dotenv";

const DB_HOST = "127.0.0.1";
const DB_PORT = 3308;
const DB_USER = user;
const DB_PASSWORD = 12345;
const DB_DATABASE = Proyecto_Finanzas;
const DB_ROOT_PASSWORD = contraseña1;

const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
  dialect: "mysql",
  host: DB_HOST,
  port: DB_PORT
})

async function TestConnection() {
    try {
       
    } catch (error) {
        
    }
}
