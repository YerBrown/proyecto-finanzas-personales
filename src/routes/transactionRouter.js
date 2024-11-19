import { Router } from "express";
import transactionViewController from "../controller/transaction/transactionViewController.js";
import { isAuthenticated } from "../middlewares/authMiddleware.js";
const router = Router();

router.get(
    "/",
    isAuthenticated,
    transactionViewController.getIncomesAndExpenses
);

export default router;
