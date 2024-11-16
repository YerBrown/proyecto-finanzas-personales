import { Router } from "express";
import transactionRouter from "./transactionRouter.js";
import expenseRouter from "./expenseRouter.js";
const router = Router();

router.use("/transaction", transactionRouter);
router.use("/expense", expenseRouter);
export default router;
