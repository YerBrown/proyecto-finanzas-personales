import { Router } from "express";
import expenseViewController from "../controller/expense/expenseViewController.js";
const router = Router();

router.get("/new", expenseViewController.createForm);

router.get("/:id/update", expenseViewController.updateForm);

router.get("/user/:user_id", expenseViewController.getAllByUserId);

router.get("/types/:user_id", expenseViewController.getExpenseCountByType);

router.get("/expensesDetail", expenseViewController.getExpenseCountByType);

router.get("/:id", expenseViewController.getById); // General, debe estar al final

router.post("/new", expenseViewController.create);

router.post("/update/:id", expenseViewController.update);

router.post("/remove/:id", expenseViewController.remove);

router.get("/", expenseViewController.getAll); // Ruta más general, al final


export default router;
