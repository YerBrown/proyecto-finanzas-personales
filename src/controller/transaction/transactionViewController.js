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
        const startDate = req.session.startDate;
        const endDate = req.session.endDate;
        const year = endDate.split("-")[0];
        const month = endDate.split("-")[1];
        const filterType = req.session.filterType;
        console.log("FILTER TYPE BUENO", filterType);

        console.log("STARTDATE ", startDate);

        const transactionsValues = {
            transactions, 
            totalIncome, 
            totalExpense, 
            startDate,
            endDate,
            month,
            year,
            filterType
            
        }
    res.render("transaction/home", {transactionsValues});
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
