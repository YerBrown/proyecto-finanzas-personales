import Mysql from "../src/config/mysql.js";

async function testDataBase() {
  const mysqlInstance = new Mysql();
  await mysqlInstance.connect();
}
async function testGetAllUsers() {
  const mysqlInstance = new Mysql();
  await mysqlInstance.query("SELECT * FROM user");
}
async function testGetUserById(id) {
    const mysqlInstance = new Mysql();
    const sql = "SELECT * FROM user WHERE id=?"
    await mysqlInstance.query(sql,[id]);
  }
async function testInsertNewUser(){
    const mysqlInstance = new Mysql();
    const sql = "INSERT INTO user (username,email,password,rol) VALUES(?,?,?,?)"
    await mysqlInstance.query(sql,['yeray','yeray@gmail.com','1234yeray','client']);
}

// testInsertNewUser();
testGetAllUsers();