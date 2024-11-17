import expenseTypeModel from "../model/expenseTypeModel.js";

// Obtiene todos los tipos de gastos
async function getAll() {
  const expenseTypes = await expenseTypeModel.findAll();
  return expenseTypes;
}

// Obtiene un tipo de gasto por su ID
async function getById(id) {
  const expenseType = await expenseTypeModel.findByPk(id);
  return expenseType;
}

// Crea un nuevo tipo de gasto con el nombre proporcionado
async function create(name) {
  const newExpenseType = await expenseTypeModel.create({
    name,
  });
  return newExpenseType;
}

// Elimina un tipo de gasto por su ID
async function remove(id) {
  const expenseTypeToRemove = await expenseTypeModel.findByPk(id);
  await expenseTypeToRemove.destroy();
  return expenseTypeToRemove;
}

export const functions = {
  getAll,
  getById,
  create,
  remove,
};
export default functions;
