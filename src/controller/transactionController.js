import incomeModel from '../model/incomeModel.js'

async function getAllIncomes(req, res) {
    const incomes = await incomeModel.getAll();
    return incomes;
}

async function getIncomeById(req, res) {
  const id = parseInt(req.params.id);
  const income = await incomeModel.getById(id);
  res.render('transaction/show',income);
}

async function getIncomesAndExpenses(req, res){
  const incomes = await getAllIncomes(req, res);
  console.log("incomes ", incomes)
  const expenses = [];
  const transactions = [];
  incomes.forEach(income => {
    const transaction = {
      id: income.id,
      amount: income.amount,
      dateTime: income.dateTime,
      comment: income.coment,
      type: income.type_id
    }
    transactions.push(transaction)
    
  });
console.log("transactions ", transactions)
  let totalIncome = 0;
    incomes.forEach(income => {
      totalIncome += income.amount;
    });
  res.render('transaction/home',{transactions, totalIncome});
}

export const functions = {
  getAllIncomes,
  getIncomeById,
  getIncomesAndExpenses
}

export default functions;
