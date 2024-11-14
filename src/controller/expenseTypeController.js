import expenseModel from "../model/expenseModel.js";
import expenseTypeModel from "../model/expenseTypeModel.js";

async function getAll() {
  const expenseTypes = await expenseTypeModel.findAll();
  return expenseTypes;
}

async function getById() {
  const { id } = req.params;
  const expenseType = await expenseTypeModel.findByPk(id);
  return expenseType;
}

async function create(name){
    const newExpenseType = await expenseTypeModel.create({
      name
    });
    return newExpenseType;
}

async function remove(id){
    const expenseTypeToRemove = await expenseTypeModel.findByPk(id);
    await expenseTypeToRemove.destroy();
    return expenseTypeToRemove;
}

export const functions = {
    getAll,
    getById,
    create,
    remove
};
export default functions;
