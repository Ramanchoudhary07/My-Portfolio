import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import path from "path";

import authRoutes from "./routes/auth.routes.js";
import projectRoutes from "./routes/project.routes.js";
import contactRoutes from "./routes/contact.routes.js";

dotenv.config();

const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(`/api/auth`, authRoutes);
app.use(`/api/project`, projectRoutes);
app.use(`/api/contact`, contactRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, `/frontend/dist`)));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  connectDB();
  console.log("server is runnning on PORT", PORT);
});
