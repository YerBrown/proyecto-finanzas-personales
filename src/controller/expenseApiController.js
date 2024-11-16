import expenseController from "./expenseController.js";

async function getAll(req, res) {
  try {
    const expenses = await expenseController.getAll();
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los gastos" });
  }
}

async function getById(req, res) {
  try {
    const id  = parseInt(req.params.id);
    const expense = await expenseController.getById(id);

    if (!expense) {
      return res.status(404).json({ error: "Gasto no encontrado" });
    }

    res.status(200).json(expense);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el gasto" });
  }
}

async function getAllByUserId(req, res) {
  try {
    const  user_id  = parseInt(req.params.user_id);
    const expense = await expenseController.getAllByUserId(user_id);

    if (!expense) {
      return res.status(404).json({ error: "Gastos no encontrado" });
    }

    res.status(200).json(expense);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el gasto" });
  }
}

async function create(req, res) {
  try {
    const { amount, title, comment, datetime, type_id, user_id } = req.body;
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
    res.status(500).json({ error: "Error al crear el gasto" });
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
    res.status(500).json({ error: "Error al actualizar el gasto" });
  }
}

async function remove(req, res) {
  try {
    const { id } = req.params;
    const expense = await expenseController.remove(id);
    res.status(200).json({ message: "Gasto eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el gasto" });
  }
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
