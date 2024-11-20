import { Router } from "express";
import incomeViewController from "../controller/income/incomeViewController.js";
import { isAuthenticated } from "../middlewares/authMiddleware.js";

const router = Router();

router.get("/", isAuthenticated, incomeViewController.getAll);

router.get("/new", isAuthenticated, incomeViewController.createForm);

router.get("/:id/update", isAuthenticated, incomeViewController.updateForm);

router.get(
    "/user/:user_id",
    isAuthenticated,
    incomeViewController.getAllByUserId
);

router.get(
    "/types/:user_id",
    isAuthenticated,
    incomeViewController.getIncomeCountByType
);

router.post("/new", isAuthenticated, incomeViewController.create);

router.post("/:id/update", isAuthenticated, incomeViewController.update);

router.post("/:id/remove", isAuthenticated, incomeViewController.remove);

router.get(
    "/incomesDetail",
    isAuthenticated,
    incomeViewController.getIncomeCountByType
);

router.get("/:id", isAuthenticated, incomeViewController.getById);

export default router;
