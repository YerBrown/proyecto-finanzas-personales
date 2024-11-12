import { Router } from "express";
import userController from "../controller/userController.js";
const router = Router();

router.get("/", userController.getAll);

// router.get("/new", userController.createForm);

// router.get("/:id", userController.getById);

// router.post("/new", userController.create);

// router.get("/:id/update", userController.updateForm);

// router.post("/:id/update", userController.update);

// router.get("/:id/delete", userController.remove);

router.get("/login", userController.renderLogin);

export default router;
