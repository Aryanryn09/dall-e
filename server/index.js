import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongoDb/connect";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.get("/", async (req, res) => {
  res.send("hello this is ryn ");
});
const startServer = async () => {
  app.listen(8080, () => {
    try {
    } catch (err) {
      console.log(err);
    }
  });
};
startServer();
