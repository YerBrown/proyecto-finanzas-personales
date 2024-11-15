import expenseController from "./expenseController.js";

async function getAll(req, res) {
  const expenses = await expenseController.getAll();
  console.log("expenses " + expenses);
  res.json(expenses);
}

async function getById(req, res) {
  const id = parseInt(req.params.id);
  const expense = await expenseController.getById(id);
  res.json(expense);
}

async function getAllByUserId(req, res) {
  const user_id = parseInt(req.params.user_id);
  const expenses = await expenseController.getAllByUserId(user_id);
  res.json(expenses);
}

async function create(req, res) {
  const { amount, title, comment, datetime, type_id, user_id } = req.body;
  const newExpense = await expenseController.create(
    amount,
    title,
    comment,
    datetime,
    type_id,
    user_id
  );
  res.json({ expense: newExpense });
}

async function update(req, res) {
  const id = parseInt(req.params.id);
  const { amount, title, comment, datetime, type_id, user_id } = req.body;

  const updatedExpense = await expenseController.update(
    id,
    amount,
    title,
    comment,
    datetime,
    type_id,
    user_id
  );
  res.json({ expense: updatedExpense });
}

async function remove(req, res) {
  const id = parseInt(req.params.id);
  const removedExpense = await expenseController.remove(id);
  res.json({ expense: removedExpense });
}

export const functions = {
  getAll,
  getById,
  getAllByUserId,
  create,
  update,
  remove,
};

export default functions;
