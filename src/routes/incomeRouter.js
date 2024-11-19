import { Router } from "express";
import incomeViewController from "../controller/income/incomeViewController.js";
const router = Router();

router.get("/", incomeViewController.getAll);

router.get("/new", incomeViewController.createForm);

router.get("/:id/update", incomeViewController.updateForm);

router.get("/user/:user_id", incomeViewController.getAllByUserId);

router.get("/types/:user_id", incomeViewController.getIncomeCountByType);

router.post("/new", incomeViewController.create);

router.post("/:id/update", incomeViewController.update);

router.post("/:id/remove", incomeViewController.remove);

router.get("/incomesDetail", incomeViewController.getIncomeCountByType);

router.get("/:id", incomeViewController.getById);

export default router;
