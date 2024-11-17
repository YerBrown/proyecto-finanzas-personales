import transactionController from "./transactionController.js";

async function getIncomesAndExpenses(req, res) {
  const { transactions, totalIncome, totalExpense } =
    await transactionController.getIncomesAndExpenses(req, res);
  res.render("transaction/home", { transactions, totalIncome, totalExpense });
}

export const functions = {
  getIncomesAndExpenses,
};
export default functions;
