import express from "express";
import * as dotenv from "dotenv";
import OpenAI from "openai";

const openAI = new OpenAIApi();
const openai = new OpenAIApi({
  apiKey: process.env.OPEN_API_KEY,
});

dotenv.config();

const router = express.Router();

export default router;
