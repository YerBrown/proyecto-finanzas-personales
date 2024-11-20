import { Router } from "express";
import authViewController from "../controller/auth/authViewController.js";

const router = Router();
// Ruta para mostrar el formulario de inicio de sesión y de registro.
router.get("/login",authViewController.loginForm);
router.get("/register",authViewController.registerForm);
router.post("/login",authViewController.login);
router.post("/register",authViewController.register);
router.get("/logout",authViewController.logout);


export default router;