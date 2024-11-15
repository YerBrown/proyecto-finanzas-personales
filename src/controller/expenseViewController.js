import expenseController from "./expenseController.js";
import expenseTypeController from "./expenseTypeController.js";

 const getAll = async (req, res) => {
  try {
    const expenses = await expenseController.getAll();
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los gastos" });
  }
};

const getById = async (req, res) => {
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
};

const getAllByUserId = async (req, res) => {
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
};

const createForm = async (req, res) => {
  try {
    const types = await expenseTypeController.getAll();
    res.render("expense/createExpenseForm", {types});
  } catch (error) {
    res.status(500).json({ error: "Error al mostrar el formulario" });
  }
};

const create = async (req, res) => {
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
};

const update = async (req, res) => {
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
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const expense = await expenseController.remove(id);
    res.status(200).json({ message: "Gasto eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el gasto" });
  }
};

export const functions = {
  getAll,
  getById,
  createForm,
  getAllByUserId,
  update,
  create,
  remove,
};

export default functions;
