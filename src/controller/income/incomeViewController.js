import incomeController from "./incomeController.js";
import incomeTypeController from "./incomeTypeController.js";

 const getAll = async (req, res) => {
  try {
    const incomes = await incomeController.getAll();
    res.status(200).json(incomes);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los gastos" });
  }
};

const getById = async (req, res) => {
  try {
    const id  = parseInt(req.params.id);
    const income = await incomeController.getById(id);

    if (!income) {
      return res.status(404).json({ error: "Gasto no encontrado" });
    }

    res.status(200).json(income);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el gasto" });
  }
};

const getAllByUserId = async (req, res) => {
  try {
    const  user_id  = parseInt(req.params.user_id);
    const income = await incomeController.getAllByUserId(user_id);

    if (!income) {
      return res.status(404).json({ error: "Gastos no encontrado" });
    }

    res.status(200).json(income);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el gasto" });
  }
};

const createForm = async (req, res) => {
  try {
    const types = await incomeTypeController.getAll();
    res.render("income/createIncomeForm", {types});
  } catch (error) {
    res.status(500).json({ error: "Error al mostrar el formulario" });
  }
};

const create = async (req, res) => {
  try {
    const { amount, title, comment, datetime, type_id, user_id } = req.body;
    const newIncome = await incomeController.create(
      amount,
      title,
      comment,
      datetime,
      type_id,
      user_id
    );

    res.status(201).json(newIncome);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el gasto" });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { amount, title, comment, datetime, type_id, user_id } = req.body;

    const income = await incomeController.update(
      id,
      amount,
      title,
      comment,
      datetime,
      type_id,
      user_id
    );
    res.status(200).json(income);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el gasto" });
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const income = await incomeController.remove(id);
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
