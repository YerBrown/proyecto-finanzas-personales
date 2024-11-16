import { Router } from "express";
import transactionRouter from "./transactionRouter.js";
const router = Router();

router.use("/transaction", transactionRouter);
router.use("/expense", expenseRouter);
export default router;
