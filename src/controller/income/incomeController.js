import incomeModel from "../../model/incomeModel.js";
import incomeTypeModel from "../../model/incomeTypeModel.js";

async function getAll() {
    const incomes = await incomeModel.findAll({
      include: {
        model: incomeTypeModel,
        attributes: ["name"],
      },
    });
    return incomes;
  }
  
  async function getById() {
    const { id } = req.params;
    const income = await incomeModel.findByPk(id, {
      include: {
        model: incomeTypeModel,
        attributes: ["name"],
      },
    });
    return income;
  }
  
  async function getAllByUserId() {
    const { user_id } = req.params;
    const incomes = await incomeModel.findAll({
      include: {
        model: incomeTypeModel,
        attributes: ["name"],
      },
      where: {
        user_id: user_id,
      },
    });
    return incomes;
  }
  
  async function create(amount, title, comment, datetime, type_id, user_id) {
    const newIncome = await incomeModel.create({
      amount: amount * 100,
      title,
      comment,
      datetime,
      type_id,
      user_id,
    });
    return newIncome;
  }
  async function update(id, amount, title, comment, datetime, type_id, user_id) {
    const income = await incomeModel.findByPk(id);
  
    if (!income) {
      return console.error("Gasto no encontrado");
    }
  
    await income.update({
      amount,
      title,
      comment,
      datetime,
      type_id,
      user_id,
    });
    return income;
  }
  async function remove(id) {
    const income = await incomeModel.findByPk(id);
  
    if (!income) {
      return console.error("Gasto no encontrado");
    }
  
    await income.destroy();
    return income;
  }

export const functions = {
    getAll,
    getById,
    getAllByUserId,
    create,
    update,
    remove

}

export default functions;