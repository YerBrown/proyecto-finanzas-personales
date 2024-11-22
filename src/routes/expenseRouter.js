import { Router } from "express";
import expenseViewController from "../controller/expense/expenseViewController.js";
import expenseApiController from "../controller/expense/expenseApiController.js";
import { isAuthenticated } from "../middlewares/authMiddleware.js";

const router = Router();

router.get(
    "/types/:user_id",
    isAuthenticated,
    expenseViewController.getExpenseCountByType
);
router.get("/user/:user_id", expenseViewController.getAllByUserId);

router.get("/:id/update", isAuthenticated, expenseViewController.updateForm);
router.post("/update/:id", isAuthenticated, expenseViewController.update);
router.post("/remove/:id", isAuthenticated, expenseViewController.remove);

router.get("/new", isAuthenticated, expenseViewController.createForm);
router.post("/new", isAuthenticated, expenseViewController.create);

router.get(
    "/expensesDetail",
    isAuthenticated,
    expenseViewController.getExpenseCountByType
);
router.get("/", expenseApiController.getAll);

export default router;
