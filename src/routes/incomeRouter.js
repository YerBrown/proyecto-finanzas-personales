import {Router} from "express";
import incomeController from "../controllers/incomeController.js"
const router = Router();

router.get("/",incomeController.getAll);

router.get("/new",incomeController.createForm);

router.get("/:id",incomeController.getById);

router.post("/new",incomeController.create);

router.get("/:id/update",incomeController.updateForm);

router.post("/:id/update",incomeController.update);

router.get("/:id/delete",incomeController.remove);


export default router;