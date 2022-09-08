import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import agentRoute from "./routes/agentRoute.js"; 

const app = express();
const port = 3000;

dotenv.config();

app.use(express.json());

const connectionToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connection to mongoDB is successfull!");
  } catch (error) {
    console.error(error);
  }
};

app.use("/api", agentRoute);

app.listen(port, () => {
    connectionToDB();
    console.log(`Server started at ${port} port`);
});