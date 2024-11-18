import transactionController from "./transactionController.js";
import incomeController from "../income/incomeController.js";

async function getIncomesAndExpenses(req, res) {
    const { transactions, totalIncome, totalExpense } =  await transactionController.getIncomesAndExpenses(req,res);
    res.render("transaction/home", { transactions, totalIncome, totalExpense });
}


async function getIncomesType(req, res) {
    console.log("MIKEELBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB")
    const incomes =  await incomeController.getAll(req, res);
    res.json(incomes);
    console.log("INCOMES " + incomes);
}


export const functions = {
    getIncomesAndExpenses,
    getIncomesType
}
export default functions;