import { Router } from "express";
import userController from "../controller/userViewController.js";
const router = Router();

router.get("/", userController.getAll);

router.get("/:id", userController.getById);

router.post("/new", userController.create);

router.post("/:id/update", userController.update);

router.get("/login", userController.loginForm);

router.get("/register", userController.registerForm);

router.post("/:id/deactivate", userController.deactivate);

router.post("/admin/user", userController.deactivate);

export default router;
