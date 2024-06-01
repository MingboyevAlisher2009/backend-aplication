import express from "express";
import dotenv from "dotenv";
import MongoDb from "./db/index.js";
import cors from "cors";

// Routes
import authRouter from "./routes/auth.routes.js";
import productRouter from "./routes/product.routes.js";
import categoryRouter from "./routes/category.routes.js";

dotenv.config();

const app = express();

app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/products", productRouter);
app.use("/api/category", categoryRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  await MongoDb();
  console.log(`Server run on link: http://localhost:${PORT}`);
});
