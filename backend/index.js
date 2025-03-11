import path from 'path';
import { fileURLToPath } from 'url';
import express from "express";
import mongoose from "mongoose";
import router from "./controllers/staff.route.js";
import { loadConfig } from './config.js'



const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const { PORT, DB_CONN } = loadConfig()

app.use(express.json());
app.use("/assets", express.static(path.join(__dirname, 'dist/assets/')));
app.get("/vite.svg", (req,res) => {
  res.sendFile(`${__dirname}/dist/assets/vite.svg`)
})
app.get("/", (req,res) => {
  res.sendFile(`${__dirname}/dist/index.html`)
})
app.use("/api/staff", router)

console.log(DB_CONN);
console.log(PORT);



mongoose
  .connect(DB_CONN)
  .then(() => {
    console.log("Successfully connected to database!");
    app.listen(PORT, () => {
      console.log(`App is runnint at port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });