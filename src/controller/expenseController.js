import expenseModel from "../model/expenseModel.js";
import expenseTypeModel from "../model/expenseTypeModel.js";

async function getAll() {
  const expenses = await expenseModel.findAll({
    include: {
      model: expenseTypeModel,
      attributes: ["name"],
    },
  });
  return expenses;
}

async function getById(id) {
  const expense = await expenseModel.findByPk(id, {
    include: {
      model: expenseTypeModel,
      attributes: ["name"],
    },
  });
  return expense;
}

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

async function create(amount, title, comment, datetime, type_id, user_id) {
  const newExpense = await expenseModel.create({
    amount: amount * 100,
    title,
    comment,
    datetime,
    type_id,
    user_id,
  });
  return newExpense;
}
async function update(id, amount, title, comment, datetime, type_id, user_id) {
  const expense = await expenseModel.findByPk(id);

  if (!expense) {
    return console.error("Gasto no encontrado");
  }
  await expense.update({
    amount:-Math.abs(amount*100),
    title,
    comment,
    datetime,
    type_id,
    user_id,
  });
  return expense;
}
async function remove(id) {
  const expense = await expenseModel.findByPk(id);

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
