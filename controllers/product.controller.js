import Basket from "../models/basket.js";
import Favorite from "../models/favorite.js";
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

export const addFavorite = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);
    const favorite = await Favorite.create({
      ...product._doc,
      author: req.userId,
    });
    console.log(favorite);
    res.json({ message: "Favorite added" });
  } catch (error) {
    console.log(error.message);
    res.status(401).json(error);
  }
};

export const addBasket = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);
    const favorite = await Basket.create({
      ...product._doc,
      author: req.userId,
    });
    console.log(favorite);
    res.json({ message: "Basket added" });
  } catch (error) {
    console.log(error.message);
    res.status(401).json(error);
  }
};

export const getFavorite = async (req, res) => {
  const author = req.userId;

  try {
    const data = await Favorite.find({ author });
    res.status(201).json(data);
  } catch (error) {
    res.status(403).json({ error: "Bad request" });
  }
};

export const getBasket = async (req, res) => {
  const author = req.userId;

  try {
    const data = await Basket.find({ author });
    res.status(201).json(data);
  } catch (error) {
    res.status(403).json({ error: "Bad request" });
  }
};

export const deleteFavorite = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Favorite.findByIdAndDelete(id);
    res.status(201).json(data);
  } catch (error) {
    res.status(403).json({ error: "Bad request" });
  }
};

export const deleteBasket = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Basket.findByIdAndDelete(id);
    res.status(201).json(data);
  } catch (error) {
    res.status(403).json({ error: "Bad request" });
  }
};
