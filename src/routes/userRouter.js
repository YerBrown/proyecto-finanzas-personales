import { Router } from "express";
import userController from "../controller/user/userApiController.js";
import { isAuthenticated } from "../middlewares/authMiddleware.js";

const router = Router();

router.get("/", isAuthenticated, userController.getAll);

// router.get("/new", userController.createForm);

router.get("/:id", userController.getById);

router.post("/new", userController.create);

// router.get("/:id/update", userController.updateForm);

router.post("/:id/update", userController.update);
router.get("/:id/deactivate", userController.deactivate);

// router.get("/login", userController.renderLogin);

export default router;
