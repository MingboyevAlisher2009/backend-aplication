import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
  img: { type: Array, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  sale: { type: Boolean, default: false },
  topProducts: { type: Boolean, default: false },
});

const Product = model("Product", ProductSchema);

export default Product;
