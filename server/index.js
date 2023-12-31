import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongoDb/connect.js";
import postRoutes from "./routes/PostRoutes.js";
import dalleRoutes from "./routes/DalleRoutes.js";

//configuring the routes

app.use("api/v1/dalle", postRoutes);
app.use("api/v1/dalle", dalleRoutes);

// configuring the dot env

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.get("/", async (req, res) => {
  res.send("hello this is ryn ");
});
const startServer = async () => {
  app.listen(8080, () => {
    console.log("listening on :http://localhost:8080/");
    try {
      connectDB(process.env.MONGODB_URL);
    } catch (err) {
      console.log(err);
    }
  });
};
startServer();
