import {Router} from "express";
import expenseController from "../controllers/expenseController.js"
const router = Router();

router.get("/",expenseController.getAll);

router.get("/new",expenseController.createForm);

router.get("/:id",expenseController.getById);

router.post("/new",expenseController.create);

router.get("/:id/update",expenseController.updateForm);

router.post("/:id/update",expenseController.update);

router.get("/:id/delete",expenseController.remove);


export default router;