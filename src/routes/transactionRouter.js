import {Router} from "express";
import transactionController from "../controller/transactionController.js"
const router = Router();

router.get("/",transactionController.getIncomesAndExpenses);

router.get("/:id",transactionController.getIncomeById);

// router.get("/new",transactionController.createForm)

// router.post("/new",transactionController.create);

// router.get("/:id/update",transactionController.updateForm);

// router.post("/:id/update",transactionController.update);

// router.get("/:id/delete",transactionController.remove);


export default router;