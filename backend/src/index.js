import express from "express";
import dotenv from "dotenv";

import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();
const app = express();

const port = process.env.PORT || 5000;

app.use("/api/auth", authRoutes);

app.listen(port, async () => {
  await connectDB();
  console.log(`app is running at port ${port}`);
});
