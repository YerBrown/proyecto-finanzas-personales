import incomeModel from '../model/incomeModel.js'
import incomeTypeModel from '../model/incomeTypeModel.js'
import expenseController from './expenseController.js'

async function getAllIncomes() {
    const incomes = await incomeModel.findAll({
      include: {
        model: incomeTypeModel,
        attributes: ['name']}
    });
    
    return incomes;
};

async function getIncomesAndExpenses(){
  const incomes = await getAllIncomes();
  const expenses = await expenseController.getAll();
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
    transactions.push(transaction);
  });

  expenses.forEach(expense => {
    const transaction = {
      id: expense.id,
      title: expense.title,
      amount: expense.amount/100,
      dateTime: expense.datetime,
      comment: expense.comment,
      type: expense.expense_type.name,
      user: expense.user_id
    }
    transactions.push(transaction);
    console.log("transaction", transaction)
  });

  let totalIncome = 0;
    incomes.forEach(income => {
      totalIncome += income.amount/100;
    });
    transactions.sort((a,b)=>new Date(b.dateTime) - new Date(a.dateTime));
  return {transactions, totalIncome};
}

export const functions = {
  getAllIncomes,
  getIncomesAndExpenses
}

export default functions;
