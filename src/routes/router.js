import { Router } from "express";
import transactionRouter from "./transactionRouter.js";
const router = Router();

router.use("/transaction", transactionRouter);

export default router;
