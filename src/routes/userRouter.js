import { Router } from "express";
import userController from "../controller/user/userViewController.js";
const router = Router();
import { isAuthenticated, isAdmin } from "../middlewares/authMiddleware.js";
router.get("/", isAdmin, userController.getAll);

router.get("/:id", userController.getById);

router.post("/new", userController.create);

router.post("/:id/update", userController.update);

router.post("/:id/deactivate", userController.deactivate);

router.post("/admin/user", userController.deactivate);

export default router;
