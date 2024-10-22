import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./lib/db.js";

import authRoutes from "./routes/auth.routes.js";
import projectRoutes from "./routes/project.routes.js";
import contactRoutes from "./routes/contact.routes.js";

dotenv.config();

const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.get(`/`, (req, res) => {
  res.status(200).send({ message: "This is portfolio api" });
});

app.use(`/api/auth`, authRoutes);
app.use(`/api/project`, projectRoutes);
app.use(`/api/contact`, contactRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log("server is runnning on PORT", PORT);
});
