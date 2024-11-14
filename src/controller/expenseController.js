import expenseModel from "../model/expenseModel.js";
import expenseTypeModel from "../model/expenseTypeModel.js";

const getAllExpenses = async (req, res) => {
  try {
    const expenses = await expenseModel.findAll();
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los gastos" });
  }
};

const getAllExpensesWithTypes = async (req, res) => {
  try {
    const expenses = await expenseModel.findAll({
      include: {
        model: expenseTypeModel,
        attributes: ["name"],
      },
    });
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los gastos" });
  }
};
const getExpenseById = async (req, res) => {
  try {
    const { id } = req.params;
    const expense = await expenseModel.findByPk(id);

    if (!expense) {
      return res.status(404).json({ error: "Gasto no encontrado" });
    }

    res.status(200).json(expense);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el gasto" });
  }
};

const getExpensesByUserId = async (req, res) => {
  try {
    const { user_id } = req.params;
    const expense = await expenseModel.findAll({
      where: {
        user_id: user_id,
      },
    });

    if (!expense) {
      return res.status(404).json({ error: "Gastos no encontrado" });
    }

    res.status(200).json(expense);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el gasto" });
  }
};

const updateExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const { amount, title, comment, datetime, type_id, user_id } = req.body;

    const expense = await expenseModel.findByPk(id);

    if (!expense) {
      return res.status(404).json({ error: "Gasto no encontrado" });
    }

    await expense.update({
      amount,
      title,
      comment,
      datetime,
      type_id,
      user_id,
    });
    res.status(200).json(expense);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el gasto" });
  }
};

const createExpense = async (req, res) => {
  try {
    const { amount, title, comment, datetime, type_id, user_id } = req.body;
    const newExpense = await expenseModel.create({
      amount,
      title,
      comment,
      datetime,
      type_id,
      user_id,
    });

    res.status(201).json(newExpense);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el gasto" });
  }
};

const deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const expense = await expenseModel.findByPk(id);

    if (!expense) {
      return res.status(404).json({ error: "Gasto no encontrado" });
    }

    await expense.destroy();
    res.status(200).json({ message: "Gasto eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el gasto" });
  }
};

export const functions = {
  getAllExpenses,
  getAllExpensesWithTypes,
  getExpenseById,
  getExpensesByUserId,
  updateExpense,
  createExpense,
  deleteExpense,
};

export default functions;
