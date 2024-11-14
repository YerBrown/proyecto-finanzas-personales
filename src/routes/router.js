import { Router } from "express";
import userRouter from "./userRouter.js";
import transactionRouter from "./transactionRouter.js";
const router = Router();

router.get("/", (req, res) => {
  res.send("Hola mundo");
});

router.use("/user", userRouter);

router.use("/transaction", transactionRouter);

router.get("/transaction/income/add", (req, res) => {
  res.render("transaction/addIncome");
});

router.get("/transactions/expense/add", (req, res) => {
    res.render("transaction/addExpense");
  });

export default router;
