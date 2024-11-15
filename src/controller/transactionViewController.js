import transactionController from "./transactionController.js";

async function getIncomesAndExpenses(req, res) {
    const { transactions, totalIncome } =  await transactionController.getIncomesAndExpenses(req,res);
    res.render("transaction/home", { transactions, totalIncome });
}



export const functions = {
    getIncomesAndExpenses
}
export default functions;