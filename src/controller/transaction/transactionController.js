import expenseController from "../expense/expenseController.js";
import incomeController from "../income/incomeController.js";

async function getIncomesAndExpenses(id, startDate, endDate) {
    const incomes = await incomeController.getAll(id, startDate, endDate);
    const expenses = await expenseController.getAll(id, startDate, endDate);
    const transactions = [];
    let totalIncome = 0;
    let totalExpense = 0;

    incomes.forEach((income) => {
        const transaction = {
            id: income.id,
            title: income.title,
            amount: income.amount / 100,
            dateTime: income.datetime,
            comment: income.comment,
            type: income.income_type.name,
            user: income.user_id,
        };
        transactions.push(transaction);
    });

    expenses.forEach((expense) => {
        const transaction = {
            id: expense.id,
            title: expense.title,
            amount: expense.amount / 100,
            dateTime: expense.datetime,
            comment: expense.comment,
            type: expense.expense_type.name,
            user: expense.user_id,
        };
        transactions.push(transaction);
    });

    incomes.forEach((income) => {
        totalIncome += income.amount / 100;
    });

    expenses.forEach((expense) => {
        totalExpense += expense.amount / 100;
    });
    transactions.sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime));
    return { transactions, totalIncome, totalExpense };
}

export const functions = {
    getIncomesAndExpenses,
};

export default functions;
