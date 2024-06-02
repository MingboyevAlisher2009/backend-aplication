import jwt from "jsonwebtoken";
import User from "../models/auth.model.js";

export default async function (req, res, next) {
  const token = req.headers.token;

  if (!token) {
    return res.status(404).json({ error: "User not authorization" });
  }

  const { userId } = jwt.verify(token, process.env.JWT_SECRET);
  const user = await User.findById(userId);
  req.userId = user._id;
  next();
}
