import expenseModel from "../../model/expenseModel.js";
import expenseTypeModel from "../../model/expenseTypeModel.js";

// Obtiene todos los gastos, incluyendo el nombre del tipo de gasto
async function getAll() {
  const expenses = await expenseModel.findAll({
    include: {
      model: expenseTypeModel,
      attributes: ["name"],
    },
  });
  return expenses;
}

// Obtiene un gasto por su ID
async function getById(id) {
  const expense = await expenseModel.findByPk(id, {
    include: {
      model: expenseTypeModel,
      attributes: ["name"],
    },
  });
  return expense;
}

// Obtiene todos los gastos asociados a un usuario específico
async function getAllByUserId(user_id) {
  const expenses = await expenseModel.findAll({
    include: {
      model: expenseTypeModel,
      attributes: ["name"],
    },
    where: {
      user_id: user_id,
    },
  });
  return expenses;
}

// Crea un nuevo gasto con los detalles proporcionados
async function create(amount, title, comment, datetime, type_id, user_id) {
  const newExpense = await expenseModel.create({
    amount: - Math.abs(amount * 100),
    title,
    comment,
    datetime,
    type_id,
    user_id,
  });
  return newExpense;
}

// Actualiza un gasto existente con los detalles proporcionados
async function update(id, amount, title, comment, datetime, type_id, user_id) {
  const expense = await expenseModel.findByPk(id);

  // Comprobar si ha encontrado el gasto
  if (!expense) {
    return console.error("Gasto no encontrado");
  }

  await expense.update({
    amount: -Math.abs(amount * 100), // Transforma la cantidad de euros a centimos y asegura que la cantidad sea negativa
    title,
    comment,
    datetime,
    type_id,
    user_id,
  });
  return expense;
}

// Elimina un gasto por su ID
async function remove(id) {
  const expense = await expenseModel.findByPk(id);

  // Comprobar si ha encontrado el gasto
  if (!expense) {
    return console.error("Gasto no encontrado");
  }

  await expense.destroy();
  return expense;
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
