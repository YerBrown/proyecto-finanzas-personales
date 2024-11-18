import {Router} from "express";
import transactionViewController from "../controller/transaction/transactionViewController.js";
const router = Router();

router.get("/", transactionViewController.getIncomesAndExpenses);

router.get("/detalleIngresos", transactionViewController.getIncomesType);


//router.get("/:id",transactionController.getIncomeById);

// router.get("/new",transactionController.createForm)

// router.post("/new",transactionController.create);

// router.get("/:id/update",transactionController.updateForm);

// router.post("/:id/update",transactionController.update);

// router.get("/:id/delete",transactionController.remove);


export default router;