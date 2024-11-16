import {Router} from "express";
import expenseViewController from "../controller/expenseViewController.js"
const router = Router();

router.get("/",expenseViewController.getAll);

router.get("/new",expenseViewController.createForm);

router.get("/:id",expenseViewController.getById);

router.get("/user/:user_id",expenseViewController.getAllByUserId);

router.post("/new",expenseViewController.create);

router.post("/update/:id",expenseViewController.update);

router.post("/remove/:id",expenseViewController.remove);

export default router;