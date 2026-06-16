import express from "express";
import path from "path";
import os from "os";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    node: os.hostname(),
    pid: process.pid,
    port: PORT,
    time: new Date()
  });

  console.log(`Handled by ${os.hostname()} PID:${process.pid}`);
});

app.use("/images", express.static(path.join(__dirname, "images")));

app.get("/test", (req, res) => {
  res.send("Hello World from Express 🚀");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
