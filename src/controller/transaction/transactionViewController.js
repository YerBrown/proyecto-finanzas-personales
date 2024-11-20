import transactionController from "./transactionController.js";
import incomeController from "../income/incomeController.js";
async function getIncomesAndExpenses(req, res) {
    console.log("user_id", res.locals.user);
    const { transactions, totalIncome, totalExpense } =
        await transactionController.getIncomesAndExpenses(
            res.locals.user.id,
            req.session.startDate,
            req.session.endDate
        );
    res.render("transaction/home", { transactions, totalIncome, totalExpense });
}

async function getIncomesType(req, res) {
    const incomes = await incomeController.getAll(req, res);
    res.json(incomes);
}

export const functions = {
    getIncomesAndExpenses,
    getIncomesType,
};
export default functions;
