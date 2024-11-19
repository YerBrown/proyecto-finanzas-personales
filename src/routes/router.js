import { Router } from "express";
import transactionRouter from "./transactionRouter.js";
import expenseRouter from "./expenseRouter.js";
import incomeRouter from "./incomeRouter.js";
import userRouter from "./userRouter.js";
import dateFilterRouter from "./dateFilterRouter.js";
const router = Router();

router.use("/transaction", transactionRouter);
router.use("/expense", expenseRouter);
router.use("/income", incomeRouter);
router.use("/user", userRouter);
router.use("/date-filter", dateFilterRouter);
export default router;
