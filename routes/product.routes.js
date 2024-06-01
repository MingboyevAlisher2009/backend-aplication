import { Router } from "express";
import {
  create,
  getOne,
  getProducts,
  update,
} from "../controllers/product.controller.js";

const router = Router();

router.get("/get-products", getProducts);
router.post("/create-product", create);
router.get("/get-product/:id", getOne);
router.put("/update/:id", update);
router.post("/product/:id");

export default router;

