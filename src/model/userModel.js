import Mysql from "../config/mysql.js";
const mysqlInstance = new Mysql();

async function getAll() {
  const sql = 'SELECT * FROM user';
  const result = await mysqlInstance.query(sql);
  return result;
}

async function getById(id) {
const sql = 'SELECT * FROM user WHERE id=?';
const result = await mysqlInstance.query(sql, [id]);
  return result[0];
}

function create(newUser) {
  newUser.id = ++LAST_ID;
  users.push(newUser);
  return newUser;
}

function update(id, data) {
  const user = getById(id);
  const updatedUser = { ...user, ...data };
  const index = users.findIndex((element) => element.id == id);
  users.splice(index, 1, updatedUser);
  return updatedUser;
}

function remove(id) {
  const userRemoved = getById(id);
  userRemoved.active = 0;
  return userRemoved;
}

export const functions = {
  getAll,
  getById,
  create,
  update,
  remove,
};

export default functions;
