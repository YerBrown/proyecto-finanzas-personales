import Mysql from "../config/mysql.js";
const mysqlInstance = new Mysql();

async function getAll() {
  const sql = 'SELECT * FROM income';
  const result = await mysqlInstance.query(sql);
  
  return result;
}

async function getById(id) {
const sql = 'SELECT * FROM income WHERE id=?';
const result = await mysqlInstance.query(sql, [id]);
  return result[0];
}

  async function create(newUser) {

    const sql = ` INSERT INTO income (amount, income_date, comment, income_type_id, user_id)
      VALUES (?, ?, ?, ?, ?)`;
  
    const values = [
      newUser.amount,
      newUser.income_date,
      newUser.comment,
      newUser.income_type_id,
      newUser.user_id
    ];
   await mysqlInstance.query(sql, values);
}

async function update(id, data) {
    const sql = `UPDATE income
    SET amount = ?, income_date = ?, comment = ?, income_type_id = ?, user_id = ?
    WHERE id = ?`;

  const values = [
    data.amount,
    data.income_date,
    data.comment,
    data.income_type_id,
    data.user_id,
    id
  ];

  await mysqlInstance.query(sql, values);
}

async function remove(id) {
  const sql = `DELETE FROM income WHERE id = ?`;
  await mysqlInstance.query(sql, [id]);
}

export const functions = {
  getAll,
  getById,
  create,
  update,
  remove,
};

export default functions;
