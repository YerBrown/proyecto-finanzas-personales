import {Router} from "express";
import expenseController from "../controller/expenseController.js"
const router = Router();

router.get("/",expenseController.getAllExpenses);

router.get("/with-types",expenseController.getAllExpensesWithTypes);

router.get("/:id",expenseController.getExpenseById);

router.get("/user/:user_id",expenseController.getExpensesByUserId);

router.post("/",expenseController.createExpense);

router.put("/:id",expenseController.updateExpense);

router.delete("/:id",expenseController.deleteExpense);


export default router;