import incomeModel from '../model/incomeModel.js'
import incomeTypeModel from '../model/incomeTypeModel.js'

async function getAllIncomes(req, res) {
    const incomes = await incomeModel.findAll({
      include: {
        model: incomeTypeModel,
        attributes: ['name']}
    });
    
    return incomes;
};

async function getIncomesAndExpenses(req, res){
  const incomes = await getAllIncomes(req, res);
  const expenses = [];
  const transactions = [];
  incomes.forEach(income => {
    const transaction = {
      id: income.id,
      title: income.title,
      amount: income.amount/100,
      dateTime: income.datetime,
      comment: income.comment,
      type: income.income_type.name,
      user: income.user_id
    }
    transactions.push(transaction)
    console.log("transaction", transaction)
  });
  let totalIncome = 0;
    incomes.forEach(income => {
      totalIncome += income.amount/100;
    });
  return {transactions, totalIncome};
}

export const functions = {
  getAllIncomes,
  getIncomesAndExpenses
}

export default functions;
