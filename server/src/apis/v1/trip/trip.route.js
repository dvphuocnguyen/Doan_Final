import { Router } from "express";
import tripController from "./trip.controller.js";

const router = Router();

router.get("/", tripController.getAll);
router.post("/user/new", tripController.createByUser);
router.post("/cost/:id", tripController.updateCost);
router.post("/", tripController.create);
router.get("/:id", tripController.getById);
router.patch("/:id", tripController.update);

export default router;
