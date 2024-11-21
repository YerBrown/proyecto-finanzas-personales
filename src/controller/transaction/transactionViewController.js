import transactionController from "./transactionController.js";
import incomeController from "../income/incomeController.js";
async function getIncomesAndExpenses(req, res) {
    const { transactions, totalIncome, totalExpense } =
        await transactionController.getIncomesAndExpenses(
            res.locals.user.id,
            req.session.startDate,
            req.session.endDate
        );
    const startDate = req.session.startDate.split("T")[0];
    const endDate = req.session.endDate.split("T")[0];
    const year = endDate.split("-")[0];
    const month = endDate.split("-")[1];
    const filterType = req.session.filterType;
    const isAdmin = req.session.user.rol == "admin";
    const transactionsValues = {
        transactions,
        totalIncome,
        totalExpense,
        startDate,
        endDate,
        month,
        year,
        filterType,
    };
    res.render("transaction/home", { transactionsValues, isAdmin });
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
