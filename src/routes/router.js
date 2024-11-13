import { Router } from "express";
import userRouter from "./userRouter.js";
const router = Router();

router.get("/", (req, res) => {
  res.send("Hola mundo");
});

router.use("/user", userRouter);

router.get("/transaction/income/add", (req, res) => {
  res.render("transaction/addIncome");
});
router.get("/login", (req, res) => {
    res.render("user/login");
  });

router.get("/transactions/expense/add", (req, res) => {
    res.render("transaction/addExpense");
  });

export default router;
