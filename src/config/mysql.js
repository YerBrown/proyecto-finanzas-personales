import mysql from "mysql2/promise";

class Mysql {
  async connect() {
    try {
      this.connection = await mysql.createConnection({
        host: "localHost",
        port: 3308,
        user: "root",
        password: "12345",
        database: "Proyecto_Finanzas",
      });
      console.log("Conexion correcta con base de datos");
      return this.connection;
    } catch (error) {
      console.error("error de conexion", error.message);
    }
  }
  async disconnect() {
    if (this.connection) {
      this.connection.end();
    }
  }
  async query(sql,params=[]) {
    const connection = await this.connect();
    try {
      const [rows, fields] = await connection.query(sql,params);
      console.log(rows);
      this.disconnect();
    } catch (error) {
      console.error(error);
      this.disconnect();
    }
  }
}
export default Mysql;
