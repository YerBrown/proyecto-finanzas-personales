import { Router } from "express";
import transactionRouter from "./transactionRouter.js";
const router = Router();

router.use("/transaction", transactionRouter);

  router.get("/admin/users", (req, res) => {
    res.render("user/userAdministrator");
  });

export default router;
