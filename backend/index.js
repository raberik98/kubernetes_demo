import express from "express";
import mongoose from "mongoose";
import router from "./controllers/staff.route.js";
import { loadConfig } from './config.js'

const app = express();
const { PORT, DB_CONN } = loadConfig()

app.use(express.json());
app.use("/api/staff", router)

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