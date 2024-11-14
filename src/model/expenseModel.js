import Mysql from "../config/mysql.js";
const mysqlInstance = new Mysql();

async function getAll() {
  const sql = 'SELECT * FROM expense';
  const result = await mysqlInstance.query(sql);
  
  return result;
}

async function getById(id) {
const sql = 'SELECT * FROM expense WHERE id=?';
const result = await mysqlInstance.query(sql, [id]);
  return result[0];
}

  async function create(newUser) {

    const sql = ` INSERT INTO expense (amount, expense_date, comment, expense_type_id, user_id)
      VALUES (?, ?, ?, ?, ?)`;
  
    const values = [
      newUser.amount,
      newUser.expense_date,
      newUser.comment,
      newUser.expense_type_id,
      newUser.user_id
    ];
   await mysqlInstance.query(sql, values);
}

async function update(id, data) {
    const sql = `UPDATE expense
    SET amount = ?, expense_date = ?, comment = ?, expense_type_id = ?, user_id = ?
    WHERE id = ?`;

  const values = [
    data.amount,
    data.expense_date,
    data.comment,
    data.expense_type_id,
    data.user_id,
    id
  ];

  await mysqlInstance.query(sql, values);
}

async function remove(id) {
  const sql = `DELETE FROM expense WHERE id = ?`;
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
