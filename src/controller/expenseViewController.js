import expenseController from "./expenseController.js";
import expenseTypeController from "./expenseTypeController.js";
async function getAll(req, res) {
  try {
    const expenses = await expenseController.getAll();
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getById(req, res) {
  console.log(req.params);
  try {
    const id = parseInt(req.params.id);
    const expense = await expenseController.getById(id);

    if (!expense) {
      return res.status(404).json("Gasto no encontrado");
    }

    res.status(200).json(expense);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getAllByUserId(req, res) {
  try {
    const user_id = parseInt(req.params.user_id);
    const expense = await expenseController.getAllByUserId(user_id);

    if (!expense) {
      return res.status(404).json({ error: error.message });
    }

    res.status(200).json(expense);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createForm(req, res) {
  try {
    const types = await expenseTypeController.getAll();
    res.render("expense/createExpenseForm", { types });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function create(req, res) {
  console.log(req.body);
  try {
    // const { amount, title, comment, datetime, type_id, user_id } = req.body;
    const { amount, title, comment, datetime, type_id } = req.body;
    const user_id = 1;
    const newExpense = await expenseController.create(
      amount,
      title,
      comment,
      datetime,
      type_id,
      user_id
    );

    res.status(201).json(newExpense);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
async function updateForm(req, res) {
  try {
    const id = parseInt(req.params.id);
    const types = await expenseTypeController.getAll();
    const currentExpense = await expenseController.getById(id);
    currentExpense.amount = Math.abs(currentExpense.amount);
    res.render("expense/editExpenseForm", { types, currentExpense });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function update(req, res) {
  try {
    const { id } = req.params;
    const { amount, title, comment, datetime, type_id, user_id } = req.body;

    const expense = await expenseController.update(
      id,
      amount,
      title,
      comment,
      datetime,
      type_id,
      user_id
    );
    res.status(200).json(expense);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function remove(req, res) {
  try {
    const { id } = req.params;
    const expense = await expenseController.remove(id);
    res.status(200).json({ message: "Gasto eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const functions = {
  getAll,
  getById,
  getAllByUserId,
  createForm,
  create,
  updateForm,
  update,
  remove,
};

export default functions;
