import { Router } from "express";
import {
  addBasket,
  addFavorite,
  create,
  deleteBasket,
  deleteFavorite,
  getBasket,
  getFavorite,
  getOne,
  getProducts,
  update,
} from "../controllers/product.controller.js";
import productsMiddleware from "../middlewares/products.js";

const router = Router();

router.get("/get-products", getProducts);
router.post("/create-product", create);
router.get("/get-product/:id", getOne);
router.put("/update/:id", update);
router.post("/:id", productsMiddleware, addFavorite);
router.post("/basket/:id", productsMiddleware, addBasket);
router.get("/favorite", productsMiddleware, getFavorite);
router.get("/basket", productsMiddleware, getBasket);
router.delete("/delete-favorite/:id", productsMiddleware, deleteFavorite);
router.delete("/delete-basket/:id", productsMiddleware, deleteBasket);

export default router;
