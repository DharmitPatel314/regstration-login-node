    // dbConnect.js

import mongoose from "mongoose";

const dbConnect = async (req, res, next) => {
  try {
    await mongoose.connect(
      "mongodb://localhost:27017",
      {
        dbName: "reg_login_api",
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connected to MongoDB");
    next();
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    next(error);
  }
};

export default dbConnect;
