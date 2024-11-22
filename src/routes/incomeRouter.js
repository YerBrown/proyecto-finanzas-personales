import { Router } from "express";
import incomeViewController from "../controller/income/incomeViewController.js";
import { isAuthenticated } from "../middlewares/authMiddleware.js";

const router = Router();

router.get(
    "/types/:user_id",
    isAuthenticated,
    incomeViewController.getIncomeCountByType
);

router.get(
    "/user/:user_id",
    isAuthenticated,
    incomeViewController.getAllByUserId
);

router.get("/:id/update", isAuthenticated, incomeViewController.updateForm);

router.post("/update/:id", isAuthenticated, incomeViewController.update);
router.post("/remove/:id", isAuthenticated, incomeViewController.remove);

router.get("/new", isAuthenticated, incomeViewController.createForm);
router.post("/new", isAuthenticated, incomeViewController.create);

router.get(
    "/incomesDetail",
    isAuthenticated,
    incomeViewController.getIncomeCountByType
);
router.get("/", isAuthenticated, incomeViewController.getAll);

export default router;
