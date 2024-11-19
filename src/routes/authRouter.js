import { Router } from "express";
import authViewController from "../controller/auth/authViewController.js";

const router = Router();

router.get("/login",authViewController.loginForm);
router.get("/register",authViewController.registerForm);
router.post("/login",authViewController.login);
router.post("/register",authViewController.register);
router.get("/logout",authViewController.logout);

export default router;