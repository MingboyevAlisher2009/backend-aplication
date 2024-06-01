import User from "../models/auth.model.js";
import generationJwtToken from "../utils/token.js";

export const register = async (req, res) => {
  const { email, fullName } = req.body;

  if (!email || !fullName) {
    return res.status(401).json({ message: "All feads required" });
  }

  const existUser = await User.findOne({ email });

  if (existUser) {
    return res.status(401).json({ message: "User already exsist" });
  }

  try {
    const data = await User.create({ email, fullName });
    const token = generationJwtToken(data._id);
    res.status(201).json({ message: "User created succsessfuly", token });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req, res) => {
  const { email, fullName } = req.body;

  if (!email || !fullName) {
    return res.status(401).json({ message: "All feads required" });
  }

  const existUser = await User.findOne({ email });

  if (!existUser) {
    return res.status(404).json({ message: "User not found" });
  }

  try {
    const data = await User.find({ email });
    const token = generationJwtToken(data._id);
    res.status(201).json({ message: "Login succsessfuly", token });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
