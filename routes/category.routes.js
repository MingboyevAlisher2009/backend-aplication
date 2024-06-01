import { Router } from "express";
import {
  create,
  getAll,
  getCategoryProduct,
} from "../controllers/catregory.conroller.js";

const router = Router();

router.post("/create-category", create);
router.get("/get-category", getAll);
router.get("/:category", getCategoryProduct);

export default router;
