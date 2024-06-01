import mongoose from "mongoose";

const MongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Conected MongoDB");
  } catch (error) {
    console.log("Error connecting MongoDB", error.message);
  }
};

export default MongoDb;
