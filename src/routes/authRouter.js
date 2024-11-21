import { Router } from "express";
import authViewController from "../controller/auth/authViewController.js";
import { isAuthenticated } from "../middlewares/authMiddleware.js";

const router = Router();

router.get("/", (req, res) => {
    res.redirect("/transaction");
});

router.get("/login", authViewController.loginForm);

router.get("/register", authViewController.registerForm);

router.post("/login", authViewController.login);

router.post("/register", authViewController.register);

router.get("/logout", authViewController.logout);

export default router;
