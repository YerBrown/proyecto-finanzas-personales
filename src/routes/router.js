import { Router } from "express";
import userRouter from "./userRouter.js";
import expenseRouter from './expenseRouter.js';
const router = Router();

router.get("/", (req, res) => {
  res.send("Hola mundo");
});

router.use('/transaction',(req,res)=>{
  res.render('transaction/home')
});

router.use("/user", userRouter);
router.use("/expense", expenseRouter);

router.get("/transaction/income/add", (req, res) => {
  res.render("transaction/addIncome");
});

router.get("/transactions/expense/add", (req, res) => {
    res.render("transaction/addExpense");
  });

export default router;
