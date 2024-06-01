import Category from "../models/category.model.js";
import Product from "../models/product.model.js";

export const create = async (req, res) => {
  const { name } = req.body;
  console.log(name);
  try {
    const category = new Category(req.body);
    const data = await category.save();
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getAll = async (req, res) => {
  try {
    const data = await Category.find();
    return res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getCategoryProduct = async (req, res) => {
  const { category } = req.params;

  try {
    const data = await Product.find({category});
    return res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};
