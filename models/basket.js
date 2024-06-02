import { Schema, model } from "mongoose";

const BasketSchema = new Schema({
  author: { type: Schema.ObjectId, ref: "User", required: true },
  img: { type: Array, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  sale: { type: Boolean, default: false },
  topProducts: { type: Boolean, default: false },
});

const Basket = model("Basket", BasketSchema);

export default Basket;
