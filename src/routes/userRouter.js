import { Router } from "express";
import userController from "../controller/userViewController.js";
const router = Router();

router.get("/", isAuthenticated, userController.getAll);

router.get("/:id", userController.getById);

router.post("/new", userController.create);
router.post("/new", userController.create);

router.post("/:id/update", userController.update);

router.get("/login", userController.loginForm);

router.get("/register", userController.registerForm);

export default router;
