import Product from "../models/product.model.js";

export const getProducts = async (req, res) => {
  try {
    const data = await Product.find();
    return res.json(data);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
export const create = async (req, res) => {
  try {
    const data = await Product.create(req.body);
    return res.json(data);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getOne = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await Product.findById(id);

    return res.json(data);
  } catch (error) {
    return res.status(404).json({ message: "Product not fount" });
  }
};

export const update = async (req, res) => {
  const { id } = req.params;
  const productData = req.body;

  try {
    const data = await Product.findByIdAndUpdate(id, productData, {
      new: true,
    });
    return res.json(data);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: "Product not fount" });
  }
};
