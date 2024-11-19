import { Router } from "express";
import expenseViewController from "../controller/expense/expenseViewController.js";
import { isAuthenticated } from "../middlewares/authMiddleware.js";
const router = Router();

router.get("/new", isAuthenticated, expenseViewController.createForm);

router.get("/:id/update", isAuthenticated, expenseViewController.updateForm);

router.get(
    "/user/:user_id",
    isAuthenticated,
    expenseViewController.getAllByUserId
);

router.get(
    "/types/:user_id",
    isAuthenticated,
    expenseViewController.getExpenseCountByType
);

router.get(
    "/expensesDetail",
    isAuthenticated,
    expenseViewController.getExpenseCountByType
);

router.get("/:id", isAuthenticated, expenseViewController.getById); // General, debe estar al final

router.post("/new", isAuthenticated, expenseViewController.create);

router.post("/update/:id", isAuthenticated, expenseViewController.update);

router.post("/remove/:id", isAuthenticated, expenseViewController.remove);

router.get("/", expenseViewController.getAll); // Ruta más general, al final

export default router;
