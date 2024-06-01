// models/category.model.js
import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  // other fields
});

const Category = mongoose.model("Category", categorySchema);

export default Category;
