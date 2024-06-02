import express from "express"; // Importing the Express framework
import dotenv from "dotenv"; // Importing dotenv for environment variables
import MongoDb from "./db/index.js"; // Importing the MongoDB connection function
import cors from "cors"; // Importing CORS middleware

// Importing route modules
import authRouter from "./routes/auth.routes.js";
import productRouter from "./routes/product.routes.js";
import categoryRouter from "./routes/category.routes.js";

// Loading environment variables from .env file
dotenv.config();

// Initializing the Express application
const app = express();

// Setting up CORS middleware to allow cross-origin requests
app.use(
  cors({
    credentials: true, // Allows cookies to be included in requests
    origin: "http://localhost:5173", // Specifies allowed origin from environment variable
  })
);

// Middleware to parse JSON bodies from incoming requests
app.use(express.json());

// Setting up routes
app.use("/api/auth", authRouter); // Auth routes
app.use("/api/products", productRouter); // Product routes
app.use("/api/category", categoryRouter); // Category routes

// Setting the port from environment variables or defaulting to 5000
const PORT = process.env.PORT || 5000;

// Starting the server and connecting to the database
app.listen(PORT, async () => {
  await MongoDb(); // Connecting to the MongoDB database
  console.log(`Server run on link: http://localhost:${PORT}`); // Logging the server URL
});
